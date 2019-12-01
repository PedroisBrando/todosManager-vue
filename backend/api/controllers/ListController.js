/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create_lists: async function(req, res){
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

};

