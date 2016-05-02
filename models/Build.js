var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Part = require('./Part');
// var Comment = require('./Comment');

var Comment = new Schema({
  date: {type: Date, default: Date.now}, 
  Body: {type: String}
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
  // parts: [Part],
  // comments: [{
  //   body: { type: String }, 
  //   date: { type: Date, default: Date.now},
  //   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  // }]
  comments: [Comment]

});

module.exports = mongoose.model('Build', buildSchema);
