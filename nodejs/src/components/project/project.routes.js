/**
 *
 * @param {Object} ProjectRoutes
 * @param {ExpressRouter} ProjectRoutes.router
 * @param {ProjectController} ProjectRoutes.ProjectController
 * @param {ProjectValidator} ProjectRoutes.ProjectValidator
 * @param {makeExpressCallback} ProjectRoutes.makeExpressCallback
 * @param {makeValidatorCallback} ProjectRoutes.makeValidatorCallback
 * @returns {ExpressRouter}
 */
 const authorization = require('../../middlewares/auth');
 module.exports = ({ router, ProjectController, ProjectValidator, makeValidatorCallback, makeExpressCallback }) => {
    console.log("/login/login/login")
  //  tasklist with user id
    router.get('/tasklist',authorization, makeExpressCallback(ProjectController.taskList));

    router.get('/projectlist', authorization,makeExpressCallback(ProjectController.projectList));

    router.get('/employeelist',authorization, makeExpressCallback(ProjectController.employeeList));

    router.post('/addproject',authorization, makeExpressCallback(ProjectController. addproject));
    router.put('/updateproject',authorization, makeExpressCallback(ProjectController. updateproject));
    router.delete('/deleteproject',authorization, makeExpressCallback(ProjectController. deleteproject));

    // router.post('/addtask',authorization, makeExpressCallback(ProjectController.addtask));
    router.get('/taskbyid/:id',authorization, makeExpressCallback(ProjectController.taskbyid));
    router.put('/managetask/:id',authorization,makeExpressCallback(ProjectController.managetask));



    router.get('/tasklistadmin',authorization, makeExpressCallback(ProjectController.tasklistadmin));
    // calling taskbyid/:id'
    router.post('/addtask', authorization,makeExpressCallback(ProjectController.addtask));
    router.put('/managetaskadmin/:id',authorization,makeExpressCallback(ProjectController.managetaskadmin));
    router.delete('/delete/:id',authorization,makeExpressCallback(ProjectController.delete));

  
    return router;
  };

