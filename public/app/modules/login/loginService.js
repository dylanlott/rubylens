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
    .factory('LoginService', LoginService);
  // Inject your dependencies as .$inject = ['$http', 'someSevide'];
  // function Name ($http, someSevide) {...}

  LoginService.$inject = ['firebaseUrl', '$firebaseAuth', '$log'];

  function LoginService(firebaseUrl, $firebaseAuth, $log) {
    $log.log("LoginService called."); 
    var LoginService = {}
    return LoginService; 
  }

})();
