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
		.controller('BuildsCtrl', Builds);

		Builds.$inject = ['BuildsService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Builds() {
			/*jshint validthis: true */
			var vm = this;

			console.log("BuildsCtrl running. " ); 
			activate(); 

			function activate(){
				BuildsService.getBuilds(); 
			}

		}

})();
