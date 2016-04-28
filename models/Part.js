var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var q = require('q');

var Comment = new Schema({
  body: String,
  date: { type: Date, default: Date.now }
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

var Part = new Schema({
  name: { type: String, required = true },
  url: { type: String, required = true },
  price: { type: Number, required = true },
  comment: [Comment]
})

module.exports = mongoose.model('Part', partSchema);
