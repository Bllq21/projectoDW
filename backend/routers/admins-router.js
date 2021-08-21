var express = require('express');
var router = express.Router();
var admin = require('../models/admins');
var mongoose = require('mongoose');

router.get('/',function (req, res){
    admin.find({},{nombre:true, email:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



module.exports = router;
