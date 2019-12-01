/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create_todos: async function(req, res){
    try{
      let todos = [
        {'title': 'Call Sam For Payments', 'urgency': 'green', 'check': false, 'ownerList': 1},
        {'title': 'Make payment to Bluedart', 'urgency': 'yellow', 'check': false, 'ownerList': 1},
        {'title': 'Office grocery shopping', 'urgency': 'red', 'check': false, 'ownerList': 1},
        {'title': 'Ask for Lunch to Clients', 'urgency': 'green', 'check': false, 'ownerList': 1},

        {'title': 'Call Sam For Payments', 'urgency': 'green', 'check': false, 'ownerList': 2},
        {'title': 'Make payment to Bluedart', 'urgency': 'yellow', 'check': false, 'ownerList': 2},
        {'title': 'Office grocery shopping', 'urgency': 'red', 'check': false, 'ownerList': 2},
        {'title': 'Ask for Lunch to Clients', 'urgency': 'green', 'check': false, 'ownerList': 2},
      ];
      let createdTodos = await Todo.createEach(todos).fetch();
      let pop = await Todo.find().populate('lists');
    }catch(err){
      sails.log(err.name);
      return res.json('Record in Todos already exists');
    }
    sails.log(createdTodos);
    return res.json(createdTodos);
  },

};

