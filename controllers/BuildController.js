var Build = require('../models/Build.js'); 
// var Util = require('Utilities.js'); 

module.exports = {

  create: function(req, res){
    var newBuild = new Build(req.body); 
    newBuild.owner = req.user._id; 
    newBuild.save(function(data){
      console.log("create build: ", data); 
      res.status(200).json(data).end(); 
    })
    .then(function(){
      console.log("create build then "); 
    })
    .catch(function(err){
      res.status(500).send(err).end(); 
    }); 
  },

  getAll: function(req, res){
    Build 
      .find({ owner: req.user._id })
      .exec()
      .then(function(data){
        console.log("get all builds: ", data); 
        res.status(200).json(data).end(); 
      })
      .catch(function(err){
        res.status(500).send(err).end(); 
      })
  },

  getOne: function(req, res) {
    Build
      .findById(req.params.id)
      .then(function(data){
        console.log("get One build: ", data); 
        res.status(200).json(data).end(); 
      })
      .catch(function(err){
        res.status(500).send(err).end();
      })
  },

  delete: function(req, res) {
    Build 
      .findByIdAndRemove(req.params.id)
      .then(function(data){
        console.log("delete build: ", data)
      })
      .catch(function(err){
        res.status(500).send(err).end(); 
      })
  }

}