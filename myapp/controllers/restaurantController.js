'use strict';
var mongoose = require('mongoose');
require('./../models/restaurant');

class RestaurantController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    getMany() {
    
        var RestaurantModel = mongoose.model('Restaurant');

        let restaurantQuery = RestaurantModel.find({}, (err) => {
            if(err) {
                return this.req.status(404).json({error : "Resource not found"});
            }
          });
      
          restaurantQuery.exec((err, response) => {
            if(err || !response) {
                return this.res.status(404).end();
            } else {
                return this.res.status(200).json(response);
            }
          });
    }

    getOneRestaurant() {
        var RestaurantModel = mongoose.model('Restaurant');

        let restaurantQuery = RestaurantModel.findOne({_id:this.req.params['id']}, (err) => {
            if(err) {
                return this.res.status(404).end();
            }
          });
      
          restaurantQuery.exec((err, response) => {
              if(err || !response){
                return this.res.status(404).end();
              } else {
                return this.res.status(200).json(response);
              }
          });
    }

    create() {
        var RestaurantModel = mongoose.model('Restaurant');

        RestaurantModel.create(this.req.body, function(err, response){
            if(err) {
                console.log('Error has Ocurred');
            }
        });
    }

    deleteOne() {
        var RestaurantModel = mongoose.model('Restaurant');

        RestaurantModel.findOneAndRemove(
            { _id:this.req.params.id },
            function(err){
                if(err){
                    console.log('Error has Ocurred');
                }
            });
    }

    updateOne(){
        var RestaurantModel = mongoose.model('Restaurant');

        RestaurantModel.findOneAndUpdate(
            { _id:this.req.params.id },
            { $set : { name:this.req.body.name , cuisine:this.req.body.cuisine } },
            { upsert : true },
            function(err, response){
                if(err){
                    console.log('Error has Ocurrer');
                }
            });
    }
}

module.exports = RestaurantController;