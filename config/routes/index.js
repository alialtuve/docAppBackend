const express = require('express');

const app = express();
const _ = require('lodash');
const controllers = require('../../api/controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.mergedParams = _.assign({}, req.params, req.query, req.body);
  next();
});

app.param('id', (req, res, next) => {
  next();
});

_.each(controllers, (controller) => {
  const prefixRoute = '/api';
  const { route, router } = controller;
  const fullRoute = prefixRoute + route;
  app.use(fullRoute, router);
});

module.exports = app;
