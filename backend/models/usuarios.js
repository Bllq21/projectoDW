var mongoose = require('mongoose');

var esquemaOrdenes = new mongoose.Schema({
    nombreProducto: String,
    nombreEmpresa: String,
    cantidad: Number,
    precio: Double,
    direccion: String
})
var esquemaUsuarios = new mongoose.Schema(
    
    {
    "nombre": String,
    "apellido": String,
    "telf": String,
    "email": String,
    "password": String,
    "rol": String,
    "direc": String,
    "pedidos": [esquemaOrdenes]
    }
    
);

module.exports = mongoose.model('usuarios', esquemaUsuarios);