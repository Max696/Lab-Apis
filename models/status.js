var restful	= require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
    Nombre:String,
	Descripcion:String,
	Ingredientes:String,
	TipoMasa:String,
	Tamaño:String,
	Porciones:String,
	Extra:String
});

module.exports = restful.model('tblstatus',statusSchema);