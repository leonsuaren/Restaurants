const mongoose = require('mongoose');

class Connector {
    connect() {
        mongoose.connect('mongodb://localhost:37017/Restaurants');
    }
}

module.exports = new Connector();