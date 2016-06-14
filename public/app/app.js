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

  angular.module('builtright', [
    'ngResource',
    'ngAria',
    'ui.bootstrap',
    'ngMaterial',
    'ngMdIcons',
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'home',
    'builds',
    'login',
    'firebase'
  ])
  .constant('firebaseUrl', 'https://builtright.firebaseio.com/')

})();
