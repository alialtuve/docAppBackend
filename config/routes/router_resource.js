const express = require('express');

const router = express.Router();
const _ = require('lodash');

router.param('id', (req, res, next) => {
  next();
});
router.setMiddlewares = (middlewares) => {
  const self = this;
  _.each(middlewares, (middleware) => {
    self.use(middleware);
  });
};

router.index = (indexAction) => {
  this.get('/', indexAction);
  return this;
};
router.show = (showAction) => {
  this.get('/:id', showAction);
  return this;
};
router.create = (createAction) => {
  this.post('/', createAction);
  return this;
};
router.update = (updateAction) => {
  this.put('/:id', updateAction);
  return this;
};
router.patch = (patchAction) => {
  this.patch('/:id', patchAction);
  return this;
};

router.destroy = (deleteAction) => {
  this.delete('/:id', deleteAction);
  return this;
};
router.collection = (restVerb = 'get', actionName, action) => {
  this[restVerb](actionName, action);
  return this;
};
router.memember = (restVerb = 'get', actionName, action) => {
  this[restVerb](`/:id/${actionName}`, action);
  return this;
};
router.resource = (controller, params = {}) => {
  const exceptActions = params.except;
  const onlyActions = params.only;
  if (onlyActions && onlyActions.length > 0) {
    _.each(onlyActions, (action) => {
      this[action](controller[action]);
    });
  } else {
    _.each(controller, (action, actionName) => {
      const mapper = router[actionName];
      if (mapper !== null && _.indexOf(exceptActions, actionName) < 0) {
        mapper(action);
      }
    });
  }
  if (params.middlewares && params.middlewares.lenght > 0) {
    this.setMiddlewares(params.middlewares);
  }
  return this;
};

module.exports = router;
