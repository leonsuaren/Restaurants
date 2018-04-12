var express = require('express');
var router = express.Router();
var PageController = require('./../controllers/pageController');
var mongoose = require('mongoose');
var Page = require('../models/page');
var BodyParser = require('body-parser');

router.get('/', function(req, res, next){
  var pageController = new PageController(req, res, next);
  pageController.getMany();
});

router.get('/:slug', function(req, res, next){
    // var pageController = new PageController(req, res, next);
    // pageController.getOne();
    var slug = req.params.slug

    Page.findOne({ slug : slug }, function(err, page){
        if(err) console.log(err);
        res.json(page);
    });
  });



module.exports = router;