'use strict';
var mongoose = require('mongoose');
require('./../models/page');

class PageController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    getMany() {
        var PageModel = mongoose.model('Page');

        let pageQuery = PageModel.find({}, (err) => {
            if(err) console.log(err);
          });
      
          pageQuery.exec((err, response) => {
            this.res.json(response);
          });
    }

    // getOne(){
    //     var PageModel = mongoose.model('Page');
    //     var slug = this.req.params.slug
    //     PageModel.findOne(
    //         { slug : slug },
    //         function(err, response){
    //             if(err){
    //                 console.log('Error has Ocurred');
    //             }
    //         });
    // }
}

module.exports = PageController;