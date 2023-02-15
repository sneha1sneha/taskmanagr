



const { User } = require('../../db/models');
// const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger = require('../../support/logger');
const { any } = require('@hapi/joi');
const ProjectService = {

    /**
     * Login a user and generate token.
     * @async
     * @method
     * @param {UserDto} httpRequest - Request Body
     * @returns {Context} Context object
     * @throws {NotFoundError} When the user is not found.
     */

    // Function to retrieve a list of tasks from the database
    getTaskList: async (httpRequest) => {
        console.log("httpRequest", httpRequest);
        
         let id = httpRequest.body.userId;
        try {
            // SQL query to select all tasks from the "task" table

            let queryObj = `SELECT t.id, t.task_name, t.description, p.project_name ,s.status_type
                    FROM trial.task t
                    LEFT JOIN trial.project p
                    ON t.project_id = p.id
                    LEFT JOIN trial.status  s
                    ON  t.Status_id = s.id
                    WHERE t.user_id3 ='${id}';`;

           
            const resultObj = await db.promise(queryObj);
           
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },
// Function to retrieve a projectlist of tasks from the database
    getProjectList: async (httpRequest) => {
       
        
        try {

            let queryObj = `SELECT id,project_name FROM project; `;
            // Execute the query and store the result in "projrectList"
            const resultObj = await db.promise(queryObj);
            
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },

// Function to retrieve a employeelist of  from the database
    GetEmployeeList: async (httpRequest) => {
       
        
        try {

            let queryObj = `SELECT user_id,username FROM user; `;
            // Execute the query and store the result in "employeeList"
            const resultObj = await db.promise(queryObj);
           
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },






    // add project  function wiil call to add new task to database

    doaddproject: async (requestBody) => {

try{
        const { project_name, planned_start_date, planned_end_date, actual_start_date, actual_end_date, project_description } = requestBody;
         // Execute the query and store the result in "addproject"
        let queryObj = `INSERT INTO project(project_name, planned_start_date, planned_end_date, actual_start_date, actual_end_date, project_description) VALUES("${project_name}", "${planned_start_date}", "${planned_end_date}", "${actual_start_date}", "${actual_end_date}", "${project_description}")`;

        const resultObj = await db.promise(queryObj);
         // Return the task list to the caller
        return resultObj;
    
}catch (error) {
    // Log any errors that occur
    logger.error(error);
}

    },

// Function to add taskof tasks from the database
    doaddtask: async (requestBody) => {

try{
        const {task_name,project_name,description,planned_start_date,planned_end_date,planned_budget,status_type,username} = requestBody;  
         // Execute the query and store the result in addtask
        let queryObj=`INSERT INTO task (task_name, description, planned_start_date, planned_end_date, planned_budget, project_id, Status_id, user_id3)
        SELECT '${task_name}', '${description}', '${planned_start_date}', '${planned_end_date}','${planned_budget}', project.id, status.id, user_id
        FROM status, user, project
        WHERE status.status_type = "pending"
        AND project.project_name = '${project_name}'
        AND user.username = '${username}'
        ;`;
        const resultObj = await db.promise(queryObj);
 // Return the task list to the caller
      return resultObj;

}catch (error) {
    // Log any errors that occur
    logger.error(error);
}

      },

// function to take specific task by id
    gettaskbyid: async (httpRequest) => {
        let id = httpRequest.params.id;
       
       // Execute the query and store the result in gettask
        try {

            let queryObj =  `SELECT t.id, t.task_name, t.description, p.project_name ,s.status_type,u.username
            FROM trial.task t
            LEFT JOIN trial.project p
            ON t.project_id = p.id
            LEFT JOIN trial.status  s
            ON  t.Status_id = s.id
            LEFT JOIN trial.user  u
            ON  t.user_id3 = u.user_id
             WHERE t.id =${id}; `;
            
          
            const resultObj = await db.promise(queryObj);
            
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },




// Function mange tasks from the database
domanagetask: async (httpRequest) => {
   
    let id = httpRequest.params.id;
    // Execute the query and store the result in managetask
    try{
    const {task_name,project_name,description,planned_start_date,planned_end_date,planned_budget,actual_start_date,actual_end_date,actual_budget,status_type,user_id3} = httpRequest.body; 
    let queryObj = `UPDATE task
    SET Status_id = (SELECT id FROM status WHERE status_type = '${status_type}')
    WHERE task_name = '${task_name}'
    AND project_id = (SELECT id FROM project WHERE project_name = '${project_name}')
    AND id='${id}';`;
    const resultObj = await db.promise(queryObj);
    //  Return the task list to the caller
    return resultObj;
    }catch (error) {
        // Log any errors that occur
        logger.error(error);
    }
      },


// function to get all the list task 
      gettasklistadmin: async (httpRequest) => {
        console.log("httpRequest", httpRequest);
      
        try {
            // SQL query to select all tasks from the "task" table

            let queryObj = `SELECT t.id, t.task_name, t.description, p.project_name ,s.status_type,u.username,t.planned_start_date,t.planned_end_date,t.planned_budget
            FROM trial.task t
            LEFT JOIN trial.project p
            ON t.project_id = p.id
            LEFT JOIN trial.status  s
            ON  t.Status_id = s.id
            LEFT JOIN trial.user  u
            ON  t.user_id3 = u.user_id`
                  

          
            // Execute the query and store the result in "taskList"
            const resultObj = await db.promise(queryObj);
          
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },
// Function to change  tasks details from the database
 domanagetaskadmin: async (httpRequest) => {
     
        let id = httpRequest.params.id;
     
try{
        const {task_name,project_name,description,planned_start_date,planned_end_date,planned_budget,actual_start_date,actual_end_date,actual_budget,status_type,username} = httpRequest.body; 
        let queryObj = `UPDATE task
        SET task_name = '${task_name}',
        description = '${description}', 
        project_id = (SELECT id FROM project WHERE project_name = '${project_name}'),
        Status_id = (SELECT id FROM status WHERE status_type = '${status_type}'),
        user_id3 = (SELECT user_id FROM user WHERE username = '${username}')
        WHERE task.id = '${id}';`;
        const resultObj = await db.promise(queryObj);
      
        return resultObj;
}catch (error) {
    // Log any errors that occur
    logger.error(error);
}
          },


// Function to deletetasks from the database
 dodelete: async (httpRequest) => {
            
            let id = httpRequest.params.id;
           
           try{
               
                let queryObj = `DELETE  FROM task
                WHERE id = '${id}';`;
    
               
                const resultObj = await db.promise(queryObj);
                
                // Return the task list to the caller
                
                return resultObj;
    
           }catch (error) {
            // Log any errors that occur
            logger.error(error);
        }
},          



};
module.exports = ProjectService;
