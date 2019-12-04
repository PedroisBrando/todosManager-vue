/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
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
  destroyAll: function(req, res){
    List.destroy({}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  },
  deleteList: function(req, res){
    List.destroy({id: req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/list');
    });
  },
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

