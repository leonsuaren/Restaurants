'use strict';
var mongoose = require('mongoose');
require('./../models/restaurant');
var _ = require('lodash');

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

        RestaurantModel.create(this.req.body, _.bind((err, response) =>{
            if(err) {
                return this.res.status(400).json({error : "Resource not found"});
            } else {
                if(!response) {
                return this.res.status(400).json({error : "Resource not found"});
                } else {
                return this.res.status(201).json(response);
                }
            }
        }, this));
    }

    deleteOne() {
        var RestaurantModel = mongoose.model('Restaurant');

        RestaurantModel.findOneAndUpdate(
            { _id:this.req.params.id },
            { $set : { active : false }},
            (err) => {
                if(err){
                    return this.res.status(400).json({error : "Resource not found"});
                } else {
                    return this.res.status(200).end();
                }
            });
    }

    updateOne(){
        var RestaurantModel = mongoose.model('Restaurant');

        let restaurantQuery = RestaurantModel.findOneAndUpdate(
            { _id:this.req.params.id },
            { $set : { name:this.req.body.name } },
            { new : true },
            _.bind((err) => {
                if(err){
                    return this.res.status(404).json({error : "Resource not found"});
                }
            }, this));

        restaurantQuery.exec(_.bind((err, response) => {
            if(err || !response) {
                return this.res.status(404).json({error : "Resource not found"});
            } else {
                return this.res.status(200).json(response);
            }
        }, this));
    }
}

module.exports = RestaurantController;