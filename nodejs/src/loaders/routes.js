// Routes
const { API_PREFIX } = require('config');
const { AuthRoutes } = require('../components/Auth/auth.module');
const { ProjectRoutes } = require('../components/Project/project.module');

const routes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/project',
    route: ProjectRoutes
  },
];

module.exports = (app) => {
  routes.forEach((route) => {
    app.use(route.path, route.route);
  });
};
