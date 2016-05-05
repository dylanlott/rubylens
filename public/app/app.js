(function() {
  'use strict';

  /**
   * @ngdoc index
   * @name app
   * @description
   * # app
   *
   * Main module of the application.
   */

  angular.module('builtright', [
    'ngResource',
    'ngAria',
    'ui.bootstrap',
    'ngMaterial',
    'ngMdIcons',
    'ngMessages',
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'home',
    'builds'
  ]);

})();
