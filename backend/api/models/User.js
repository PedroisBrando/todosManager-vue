/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 const bcrypt = require('bcrypt-nodejs');

 module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    allLists: {
      collection: 'list',
      via: 'ownerUser'
    },
    //friends
  },
  customToJSON: function() {
    return _.omit(this, ['password'])
  },
  beforeCreate: function(err, cb){
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  },
  datastore: 'default',
};

