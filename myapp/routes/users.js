var express = require('express');
var router = express.Router();
var UserController = require('./../controllers/userController');
var mongoose = require('mongoose');
var User = require('./../models/user');
var BodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  var userController = new UserController(req, res, next);
  userController.getManyUsers();
});

router.get('/:id', function(req, res, next){
  var userController = new UserController(req, res, next);
  userController.getOne();
});

router.post('/', function(req, res, next){
  var userController = new UserController(req, res, next);
  userController.create();
});

router.put('/:id', function(req, res, next){
  var userController = new UserController(req, res, next);
  userController.updateOne();
});

router.delete('/:id', function(req, res, next){
  var userController = new UserController(req, res, next);
  userController.deleteOne();
});

module.exports = router;