(function () {
    'use strict';

    angular
        .module('app')
        .controller('BuildController', BuildController);

    BuildController.$inject = ['$scope'];

    function BuildController($scope) {
        $scope.title = 'People';
        $scope.people = [];
        $scope.activate = activate;

        activate();

        function activate() {
            $scope.people = [
                {first: 'John', last: 'Papa'},
                {first: 'John', last: 'Smith'},
                {first: 'Troy', last: 'Hamilton'},
                {first: 'Anthony', last: 'Tornatore'}
            ];
        }
    }
})();