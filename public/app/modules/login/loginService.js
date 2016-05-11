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
    .factory('LoginService', Login);
  // Inject your dependencies as .$inject = ['$http', 'someSevide'];
  // function Name ($http, someSevide) {...}

  Login.$inject = ['firebaseUrl', '$firebaseAuth'];

  function Login(firebaseUrl, $firebaseAuth) {
    return {
      authUser: function() {
        var ref = new Firebase(firebaseUrl);
        return $firebaseAuth(ref);
      }
    }

  }

})();
