(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('', [
		'ngResource',
		'ngAria',
		
		'ui.router',
		'home',
		'login',
	]);

})();
