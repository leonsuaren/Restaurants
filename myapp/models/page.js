var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Page = new Schema({
    title : String,
    slug : String,
    content : String,
    sidebar : String
}, { collection : 'pages' });

mongoose.model( 'Page', Page );
var Page = module.exports = mongoose.model( 'Page', Page );
