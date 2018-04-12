'use strict';
var mongoose = require('mongoose');
require('./../models/user');

class UserController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    getManyUsers() {
    
        var UserModel = mongoose.model('User');

        let userQuery = UserModel.find({}, (err) => {
            if(err) console.log(err);
          });
      
          userQuery.exec((err, response) => {
            this.res.json(response);
          });
    }

    getOne() {
        var UserModel = mongoose.model('User');

        let userQuery = UserModel.findOne({_id:this.req.params['id']}, (err) => {
            if(err) console.log(err);
          });
      
          userQuery.exec((err, response) => {
            this.res.json(response);
          });
    }

    create() {
        var UserModel = mongoose.model('User');

        UserModel.create(this.req.body, function(err, response){
            if(err){
                console.log('Error has Ocurred');
            }
        });
    }

    updateOne() {
        var UserModel = mongoose.model('User');

        UserModel.findOneAndUpdate(
            { _id:this.req.params.id },
            { $set : { name:this.req.body.name,
                       lastName:this.req.body.lastName, 
                       nickName:this.req.body.nickName,
                       password:this.req.body.password }},
            { upsert : true },
            function(err, response){
                if(err){
                    console.log('Error has Ocurred');
                }
            });
    }

    deleteOne() {
        var UserModel = mongoose.model('User');

        UserModel.findOneAndRemove(
            { _id:this.req.params.id },
            function(err, response){
                if(err){
                    console.log('Error has Ocurred');
                }
            });
    }
}

module.exports = UserController;