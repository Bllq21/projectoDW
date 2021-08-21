var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        "nombre": String,
        "apellido": String,
        "telf": String,
        "email": String,
        "password": String,
        "direc": String
    }
);

module.exports = mongoose.model('admins', esquema);