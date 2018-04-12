var express = require('express');
var router = express.Router();
var RestaurantController = require('./../controllers/restaurantController');
var mongoose = require('mongoose');

router.get('/', function(req, res, next) {
  var restaurantController = new RestaurantController(req, res, next);
  restaurantController.getMany();
});

router.get('/:id', function(req, res, next){
  var restaurantController = new RestaurantController(req, res, next);
  restaurantController.getOneRestaurant();
});

router.post('/', function(req, res, next){
  var restaurantController = new RestaurantController(req, res, next);
  restaurantController.create();
});

router.delete('/:id', function(req, res, next){
  var restaurantController = new RestaurantController(req, res, next);
  restaurantController.deleteOne();
});

router.put('/:id', function(req, res, next){
  var restaurantController = new RestaurantController(req, res, next);
  restaurantController.updateOne();
});

module.exports = router;
