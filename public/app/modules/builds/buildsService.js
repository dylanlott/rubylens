(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:buildsService
	 * @description
	 * # buildsService
	 * Service of the app
	 */

  	angular
		.module('builds')
		.factory('BuildsService', Builds);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Builds.$inject = ['$http'];

		function Builds ($http) {

		}

})();
