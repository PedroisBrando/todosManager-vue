/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create_users: async function(req, res){
    let users = [
      {'name': 'John'},
      {'name': 'Marye'},
    ];
    try{
      let createdUsers = await User.createEach(users).fetch();
    }catch(err){
      sails.log(err.name);
      return res.json('Record already exists');
    }
    sails.log(createdUsers);
    return res.json(createdUsers);
  },

};

