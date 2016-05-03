(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginDataService'];

    function LoginController(LoginDataService) {
        /* jshint validthis: true */
       
    }
})();