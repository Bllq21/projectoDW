var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');
var mongoose = require('mongoose');

//Obtener usuarios
router.get('/',function (req, res){
    usuario.find({},{_id: true, nombreUsuario:true})
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
