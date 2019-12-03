/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addUser: function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    User.create({username: username, password: password}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  },
  destroyAll: function(req, res){
    User.destroy({}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  },
  deleteUser: function(req, res){
    User.destroy({id: req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/user');
    });
  }

};

