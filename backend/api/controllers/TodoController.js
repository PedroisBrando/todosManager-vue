/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createAll: async function(req, res){
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
      let pop = await Todo.find().populate('list');
    }catch(err){
      sails.log(err.name);
      return res.json('Record in Todos already exists');
    }
    sails.log(createdTodos);
    return res.json(createdTodos);
  },
  destroyAll: function(req, res){
    Todo.destroy({}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  },
  deleteTodo: function(req, res){
    Todo.destroy({id: req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    })
  }

};

