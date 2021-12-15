/* COMP229 - Fall 2021 - - Sec 09
Group - 13
WEbExpert */

const passport = require('passport');

module.exports = function() {
    
    let userModel = require('../models/users');

    let User = userModel.userModel;
    
    passport.serializeUser(function (user, done) { 
      done(null, user.id);
    });
    
    passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user){
        done(err, user);
      });
      });
  
    require('./local')();
  };