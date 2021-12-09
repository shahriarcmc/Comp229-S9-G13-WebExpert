var express = require('express');
var router = express.Router();

userController = require('../controllers/users');

/* GET users listing. */

// router.get('/signin', userController.displayLoginPage);

router.post('/signin', userController.processLoginPage);

// router.get('/register', userController.displayRegisterPage);

router.post('/register', userController.processRegisterPage);

// router.get('/register' , function(req, res, next){
//   res.render('auth/register' , { title: 'Register' });
// });

router.get('/logout', userController.performLogout);

module.exports = router;
