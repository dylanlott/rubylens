var q = require('q'); 

module.exports = {

  create: function(model, body){
    var dfd = q.defer(); 
    var newModel = new model(body); 
    newModel.save(function(err, data){
      if(err){
        return dfd.reject(err);  
      }else {
        return dfd.resolve(data); 
      }
    }); 
    return dfd.promise; 
  }
}