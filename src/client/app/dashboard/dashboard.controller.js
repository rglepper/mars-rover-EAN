(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.rover = [];
        vm.title = 'Dashboard';
        vm.initial = {};
        vm.instructions = '';
        vm.submit = submit;

        function moveRover(obj) {
            return dataservice.moveRover(obj).then(function(data) {
                vm.rover = data;
                return vm.rover;
            });
        }

        function submit(initial, instructions) {
            moveRover({
                'x': initial.x,
                'y': initial.y,
                'facing': initial.facing,
                'instructions': instructions || 'n'
            });
        }
    }
})();
