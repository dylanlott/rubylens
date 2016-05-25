'use strict';

/**
 * @ngdoc function
 * @name app.route:buildsRoute
 * @description
 * # buildsRoute
 * Route of the app
 */

angular.module('builds')
  .config(["$stateProvider", function($stateProvider, firebaseUrl) {

    $stateProvider
      .state('home.builds', {
        url: '/builds',
        templateUrl: 'app/modules/builds/builds.html',
        controller: 'BuildsCtrl',
        controllerAs: 'vm'
      });


  }]);
