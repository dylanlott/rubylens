var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
  body: String,
  date: Date
})

var buildSchema = new Schema({

  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  make: { type: String },
  model: { type: String },
  trim: { type: String },
  options: { type: String },
  swap: { type: String },
  date_added: { type: Date, default: Date.now },
  parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part' }],
  comments: [Comment]

});

module.exports = mongoose.model('Build', buildSchema);
