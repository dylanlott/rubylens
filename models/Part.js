var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./Comment.js');

var partSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Part', partSchema);
