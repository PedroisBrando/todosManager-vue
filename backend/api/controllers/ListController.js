/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createAll: async function(req, res){
    try{
      let lists = [
        {'name': 'Office', 'ownerUser': 1},
        {'name': 'House', 'ownerUser': 1},
        {'name': 'Office', 'ownerUser': 2},
      ];
      let createdLists = await List.createEach(lists).fetch();
      let pop = await List.find().populate('user');
    }catch(err){
      sails.log(err.name);
      return res.json('Record in Lists already exists');
    }
    sails.log(createdLists);
    return res.json(createdLists)
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
      res.redirect('/user');
    })
  }

};

