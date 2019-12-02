/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
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
      res.redirect('/list');
    });
  }

};

