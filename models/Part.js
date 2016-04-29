var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
  body: {type: String},
  date: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

var Part = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
  comment: [Comment]
}); 

module.exports = mongoose.model('Part', partSchema);
