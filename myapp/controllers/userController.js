'use strict';
var mongoose = require('mongoose');
require('./../models/user');
var _ = require('lodash');

class UserController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    getManyUsers() {
    
        var UserModel = mongoose.model('User');

        let userQuery = UserModel.find({}, (err) => {
            if(err) {
                return this.res.status(404).json({error : "Resourse not found"})
            }
          });
      
          userQuery.exec((err, response) => {
            if(err) {
                return this.res.status(404).json({error : "Resourse not found"})
            } else {
                return this.res.status(200).json(response);
            }
          });
    }

    getOne() {
        var UserModel = mongoose.model('User');

        let userQuery = UserModel.findOne({_id:this.req.params.id}, (err) => {
            if(err) {
                return this.res.status(404).json({error : "Resourse not found"})
            }
          });
      
          userQuery.exec((err, response) => {
              if(err) {
                return this.res.status(404).json({error : "Resourse not found"})
              } else {
                return this.res.status(200).json(response);
              }
          });
    }

    create() {
        var UserModel = mongoose.model('User');
        var params = this.req.body

        UserModel.create(params, (err, response) => {
            if(err){
                return this.res.status(400).json({error : "Resourse not found"})
            } else {
                if(!response) {
                    return this.res.status(400).json({error : "Resourse not found"})
                } else {
                    return this.res.status(201).json(response);
                }
            }
        });
    }

    updateOne() {
        var UserModel = mongoose.model('User');

        let userQuery = UserModel.findOneAndUpdate(
            { _id:this.req.params.id },
            { $set : { username:this.req.body.username,}},
            { new : true },
            (err) => {
                if(err){
                    return this.res.status(404).json({error : "Resourse not found"})
                }
            });
            userQuery.exec(_.bind((err, response) =>{
                if(err){
                    return this.res.status(404).json({error : "Resourse not found"});
                } else {
                    return this.res.status(200).json(response);
                }
            }, this));
    }

    deleteOne() {
        var UserModel = mongoose.model('User');

        let userQuery = UserModel.findOneAndRemove(
            { _id:this.req.params.id },
            (err) => {
                if(err){
                    return this.res.status(404).json({error : "Resourse not found"})
                }
            });
        userQuery.exec(_.bind((err) =>{
            if(err){
                return this.res.status(404).json({error : "Resourse not found"});
            } else {
                return this.res.status(200).end();
            }
        }, this));
    }
}

module.exports = UserController;