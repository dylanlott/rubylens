var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User.js');

//Enums
var games = ["The Horus Heresy", "Age of Sigmar", "WarHammer 40k"];
var types = [];
var armies = [];

var itemSchema = new Schema({

  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  game: { type: String, enum: games, required: true },
  item_type: { type: String, enum: types, required: true },
  colors: { type: String, enum: colors, required: true },
  army: { type: String, enum: armies, required: true },
  title: { type: String, required: true },
  description: { type: String },
  votes: { type: mongoose.Schema.Types.ObjectId, ref: 'Vote' },
  uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  painted_by: {
    "user_account": { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    "first_name": { type: String },
    "last_name": { type: String }
  }
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  images: [{ type: String, required: true }]

});

module.exports = mongoose.model('Item', itemSchema);
