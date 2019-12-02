/**
 * Todo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
    },
    urgency: {
      type: 'string',
    },
    check: {
      type: 'boolean',
    },
    ownerList: {
      model: 'list',
    }
  },
  datastore: 'default',
};

