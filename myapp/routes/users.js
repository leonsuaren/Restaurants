var express = require('express');
var router = express.Router();
var UserController = require('./../controllers/userController');
var mongoose = require('mongoose');

router.get('/api', function(req, res, next) {
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

router.put('/', function(req, res, next){
  return res.status(405).json({error : "Invalid action"})
});

router.delete('/:id', function(req, res, next){
  var userController = new UserController(req, res, next);
  userController.deleteOne();
});
router.delete('/', function(req, res, next){
  return res.status(405).json({error : "Invalid action"})
});

module.exports = router;