/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createAll: async function(req, res){
    let users = [
      {'name': 'John'},
      {'name': 'Marye'},
    ];
    try{
      await User.createEach(users).fetch();
    }catch(err){
      sails.log(err.name);
      return res.json('Record already exists');
    }
    sails.log(createdUsers);
    return res.json(createdUsers);
    res.redirect('/user');
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
    })
  }

};

