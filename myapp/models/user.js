var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User = new Schema({
    username : String,
    password : String
}, { collection : 'users' });

mongoose.model( "User", User );
var User = module.exports = mongoose.model( "User", User );
