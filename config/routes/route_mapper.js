const express = require('express');
const resource = require('./router_resource');

const app = express();
const controllers = require('../../api/controllers');

function getResourceRouter() {
  return resource;
}

app.resources = (resourceName, params = {}) => {
  const controller = controllers.api[resourceName];
  const router = getResourceRouter().resource(controller, params);
  this.use(resourceName, router);
  return this;
};

module.exports = app;
