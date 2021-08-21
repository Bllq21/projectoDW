var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'mellegaDB';

class Database{
    constructor(){
        //Conexion a mongo Local
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conecto a mongo localmente');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();