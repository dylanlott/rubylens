(function() {
  'use strict';

  angular
    .module('app', ['ngAnimate', 'ngRoute'])
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
    // .when('/',{ templateUrl: 'app/people/people.html', title: 'people'})
    // .when('/avengers',{ templateUrl: 'app/avengers/avengers.html', title: 'avengers'})
      .when('/', {
        templateUrl: 'app/builds/builds.html',
        title: 'builds'
      })
      .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true); //remove # from urls 
  }
})();
