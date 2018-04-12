var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User = new Schema({
    username : {
        type : String,
        required : true,
        min : 6,
        max : 18
    },
    password : {
        type : String,
        required : true,
        min : 6,
        max : 18
    },
    active : {
        type : Boolean,
        default : true,
        required : false
    }
}, { collection : 'users' });

mongoose.model( "User", User );
// var User = module.exports = mongoose.model( "User", User );
