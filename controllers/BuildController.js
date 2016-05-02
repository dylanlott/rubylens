var Build = require('../models/Build.js'); 
// var Util = require('Utilities.js'); 

module.exports = {

  create: function(req, res){
    console.log("Create Build activated.", req.body); 
    var newBuild = new Build(req.body); 
    newBuild.owner = req.user._id; 
    newBuild.save(function(err, data){
      console.log("create build: ", data); 
      if(err){
        res.status(500).send(err).end(); 
      }else{
        res.status(200).json(data).end(); 
      }
    }); 
  },

  getAll: function(req, res){
    console.log("get all builds: ", req.user); 
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