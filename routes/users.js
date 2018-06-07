var express = require('express');
var router = express.Router();

// Register
router.get('/register', function(req, res){
	res.render('index');
});

// Login
router.get('/loginr', function(req, res){
	res.render('index');
});


module.exports = router;