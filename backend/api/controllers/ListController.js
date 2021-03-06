/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //Adiciona lista
  addList: function(req, res){
    let name = req.body.name;
    let ownerUser = req.body.ownerUser;
    let allTodos = [];
    let doneTodos = [];
    List.create({name: name, ownerUser: ownerUser, allTodos: allTodos, doneTodos: doneTodos}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/list');
    });
  },
  //Deleta todas as listas de todos os usuários do servidor
  destroyAll: function(req, res){
    List.destroy({}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  },
  //Delete lista específica do servidor
  deleteList: function(req, res){
    List.destroy({id: req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/list');
    });
  },
  //Mostra todas a listas do usuário
  showLists: function(req, res){
    let ownerUser = req.params.id;
    List.find({ownerUser: ownerUser}).populateAll().exec(function(err, lists){
      if(err){
        res.send(500, {error: 'Database Erro'});
      }
      res.json(lists);
    })
  }

};

