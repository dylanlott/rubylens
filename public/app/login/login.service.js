(function () {
    'use strict';

    angular
        .module('app')
        .factory('loginService', loginService);

    loginService.$inject = ['$http'];

    function loginService($http) {
        var service = {
            loginUser: loginUser
        };

        return service;

        function loginUser(user) {
            return $http({method: 'POST', url: '/auth/users', data: user}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    return data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
          }
        }
    }
})();