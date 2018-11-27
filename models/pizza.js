'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizzaCRUD', function (err) {
  if (err) console.log('error ');
  console.log('DB is connected');
});


var schema = mongoose.Schema;

var pizzaSchema = new schema({
  
  name: String,
  desc: String,
  mix: String,
  mass: String,
  cheese: String,
  pieces: Number
});
var pizzaModel = mongoose.model('pizzaModel', pizzaSchema);
module.exports = pizzaModel;