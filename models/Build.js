var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Part = require('./Part');
var commentSchema = require('./Comment').schema;

// var Comment = new Schema({
//   date: { type: Date, default: Date.now },
//   body: { type: String },
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
// })

var buildSchema = new Schema({

  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  make: { type: String },
  model: { type: String },
  trim: { type: String },
  options: { type: String },
  swap: { type: String },
  date_added: { type: Date, default: Date.now },
  comments: [commentSchema]

});

module.exports = mongoose.model('Build', buildSchema);
