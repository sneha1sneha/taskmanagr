const { http } = require('winston');
const ProjectService = require('./project.service');

const ProjectController = {
    /**
     * Handle logging in user.
     * @async
     * @method
     * @param {ExpressRequest} httpRequest
     * @returns {Promise.<ControllerResponse> }
     */
    // Function to handle retrieving a list of tasks

    taskList: async (httpRequest) => {
       
        // Call the getTaskList function from ProjectService to retrieve the task list
        const taskListData = await ProjectService.getTaskList(httpRequest);
        // Return the task list data with a status code of 200
        return {
            statusCode: 200,
            body: {
                data: taskListData
            }
        };
    },


    projectList: async (httpRequest) => {
     
      // Call the getProjectList function from ProjectService to retrieve the task list
      const projectListData = await ProjectService.getProjectList(httpRequest);
      // Return the Project list data with a status code of 200
      return {
          statusCode: 200,
          body: {
              data: projectListData
          }
      };
  },





  employeeList: async (httpRequest) => {
  
    // Call the getemployeeList function from ProjectService to retrieve the employeeList
    const employeeListData = await ProjectService.GetEmployeeList(httpRequest);
    // Return the employee list data with a status code of 200
    return {
        statusCode: 200,
        body: {
            data: employeeListData
        }
    };
},





    addproject: async (httpRequest) => {
      
        // Call the doaddproject function from AuthService to handle the addproject
        const addprojectdata = await ProjectService.doaddproject(httpRequest.body);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  addprojectdata
          }
        };
      },




      addtask: async (httpRequest) => {
       
        // Call the doaddtask function from ProjectService to handle the addtask
        const addtaskdata = await ProjectService.doaddtask(httpRequest.body);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  addtaskdata
          }
        };
      },

      taskbyid: async (httpRequest) => {
       
       // Call the gettaskbyid function from ProjectService to handle the registration
        const taskbyidData = await ProjectService.gettaskbyid(httpRequest);
        // Return the taskbyid values with a status code of 200
        return {
            statusCode: 200,
            body: {
                data: taskbyidData
            }
        };
    },





      managetask: async (httpRequest) => {
       
        // Call the domanagetask function from ProjectService to handle the status update
        const managetaskdata = await ProjectService.domanagetask(httpRequest);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  managetaskdata
          }
        };
      },







      tasklistadmin: async (httpRequest) => {
        console.log('log',httpRequest)
        // Call the getTaskListadmin function from ProjectService to retrieve the task list
        const tasklistadminData = await ProjectService.gettasklistadmin(httpRequest);
        // Return the task list data with a status code of 200
        return {
            statusCode: 200,
            body: {
                data: tasklistadminData
            }
        };
    },

      managetaskadmin: async (httpRequest) => {
        console.log('AA')
        // Call the domanagetaskadmin function from ProjectService to handle the registration
        const managetaskadmindata = await ProjectService.domanagetaskadmin(httpRequest);
    // Return the updates response with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  managetaskadmindata
          }
        };
      },

      delete: async (httpRequest) => {
        console.log('AA')
        // Call the dodelete function from ProjectService to handle the deletion
        const deletedata = await ProjectService.dodelete(httpRequest);
    // Return the deletedresponse with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  deletedata
          }
        };
      }


    };
module.exports = ProjectController;