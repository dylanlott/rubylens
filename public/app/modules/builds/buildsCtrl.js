(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:buildsCtrl
   * @description
   * # buildsCtrl
   * Controller of the app
   */

  angular
    .module('builds')
    .controller('BuildsCtrl', Builds)
    .factory('Builds', function($firebase, firebaseUrl, builds_table) {
      return $firebase(new Firebase(firebaseUrl + builds_table));
    });

	  Builds.$inject = ['BuildsService', 'firebaseUrl', '$http', '$log'];

	  function Builds(BuildsService, $http, firebaseUrl, $log) {
	    /*jshint validthis: true */
	    var vm = this;
	    vm.addBuild = false;
	    var ref = new Firebase(firebaseUrl + '/builds'); 

	    $log.log(ref); 
	    $log.log("BuildsCtrl running. ");
	    // activate();

	    vm.createBuild = function(build) {
	    	var buildsRef = ref.child("builds"); 
	    	buildsRef.set({
	    		
	    	})
	    }

	    // function activate() {
	    //   BuildsService.getBuilds();
	    // }

	  }

})();
