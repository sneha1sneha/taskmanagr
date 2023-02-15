







const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

// validator
const ProjectValidator = require('./project.validator');

// service
const ProjectService = require('./project.service');

// controller
const ProjectController = require('./project.controller');

// routes
const routes = require('./project.routes')({
  router,
  ProjectController,
  ProjectValidator,
  makeValidatorCallback,
  makeExpressCallback
});

module.exports = {
    ProjectController,
    ProjectService,
  ProjectRoutes: routes
};


