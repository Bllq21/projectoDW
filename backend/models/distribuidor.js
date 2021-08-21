var mongoose = require('mongoose');

var distribuidorSchema = new mongoose.Schema({
    nombreEmpresa: String,
    descripcion: Number,
    logo: String,
    puntaje: NumberInt,
    productos: [productoSchema]
})

var productoSchema = new mongoose.Schema({
    nombreProducto: String,
    descripcion: String,
    imagen: String,
    precio: Double
})

module.exports = mongoose.model('distribuidor', esquema);