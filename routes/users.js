// COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert

var express = require('express');
var router = express.Router();

userController = require('../controllers/users');

/* GET users listing. */
router.post('/signin', userController.processLoginPage);
router.post('/register', userController.processRegisterPage);
router.get('/logout', userController.performLogout);

module.exports = router;
