var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Restaurant = new Schema({
    address : {
        building : String,
        coord : Array,
        street : String,
        zipcode : String
        },
    borough : String,
    cuisine : String,
    grades : [{
        date : Date,
        grade : String,
        score : Number,
        },
        {
        date : Date,
        grade : String,
        score : Number,
        },
        {
        date : Date,
        grade : String,
        score : Number,
        },
        {
        date : Date,
        grade : String,
        score : Number,
        }
    ],
    name : String,
    restaurant_id : String, 
    active : {
        type : Boolean,
        default : true,
        required : false
    }
}, { collection : 'Restaurants' });

mongoose.model( "Restaurant", Restaurant );