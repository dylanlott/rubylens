var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User.js');

var itemSchema = new Schema({

  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  value: { type: Number, required: true },
  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Item', itemSchema);