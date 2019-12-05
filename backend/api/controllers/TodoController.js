/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //Adiciona tarefa a lista
  addTodo: function(req, res){
    let title = req.body.title;
    let urgency = req.body.urgency;
    let check = req.body.check;
    let ownerList = req.body.ownerList;
    let ownerListDone = req.body.ownerListDone; 
    Todo.create({title: title, urgency: urgency, check: check, ownerList: ownerList, ownerListDone: ownerListDone}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/todo');
    });
  },
  //Delete todas as tarefas de todas as listas de todos os usuários do servidor
  destroyAll: function(req, res){
    Todo.destroy({}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  },
  //Deleta tarefa específica
  deleteTodo: function(req, res){
    Todo.destroy({id: req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/list');
    });
  },

};

