var mongoose = require('mongoose');

var esquemaMotoristas = new mongoose.Schema(
    
    {
    "nombre": String,
    "apellido": String,
    "telf": String,
    "email": String,
    "password": String,
    "estado": Number,
    "direc": String,
    "pedidos": [pedidoSchema]
    }
    
);
var pedidoSchema = new mongoose.Schema({
    IdCliente: ObjectID,
    "nombreCliente": String,
    "apellidoCliente": String,
    "telfCliente": String,
    "direcCliente": String,
    "estadoPedido": String,
    "nombreProducto": String,
    "nombreEmpresa": String,
    "cantidad": Number,
    "precio": Double
})

module.exports = mongoose.model('motoristas', esquemaMotoristas);