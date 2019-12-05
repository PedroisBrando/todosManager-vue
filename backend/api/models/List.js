/**
 * List.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
    },
    allTodos: {
      collection: 'todo',
      via: 'ownerList'
    },
    //Todas as tarefas da lista, sejam feitas ou não
    doneTodos: {
      collection: 'todo',
      via: 'ownerListDone'
    },
    //Usuário a qual pertence
    ownerUser: {
      model: 'user',
    }
  },
  datastore: 'default',
};

