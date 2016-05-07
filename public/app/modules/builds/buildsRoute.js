'use strict';

/**
 * @ngdoc function
 * @name app.route:buildsRoute
 * @description
 * # buildsRoute
 * Route of the app
 */

angular.module('builds')
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('home.builds', {
        url: '/builds',
        templateUrl: 'app/modules/builds/builds.html',
        controller: 'BuildsCtrl',
        controllerAs: 'vm',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["$firebaseAuth", function($firebaseAuth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            var ref = new Firebase(firebaseUrl);
            var authObj = $firebaseAuth(ref);
            return authObj.$requireAuth();
          }]
        }
      });


  }]);
