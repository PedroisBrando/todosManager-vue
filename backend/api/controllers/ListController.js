/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addList: function(req, res){
    let name = req.body.name;
    List.create({name: name}).exec(function(err){
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
    console.log(req.params.id);
    List.destroy({id: req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/list');
    });
  }

};

