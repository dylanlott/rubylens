(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.service:loginService
   * @description
   * # loginService
   * Service of the app
   */

  angular
    .module('login')
    //Auth Factory 
    .factory('AuthService', ['$firebaseAuth', 'firebaseUrl',
      function($firebaseAuth) {
        var ref = new Firebase(firebaseUrl);
        return $firebaseAuth(ref);
      }
    ])

})();
