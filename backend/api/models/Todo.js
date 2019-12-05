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
    //A qual lista pertence
    ownerList: {
      model: 'list',
    },
    //A qual lista pertence
    ownerListDone: {
      model: 'list'
    }
  },
  datastore: 'default',
};

