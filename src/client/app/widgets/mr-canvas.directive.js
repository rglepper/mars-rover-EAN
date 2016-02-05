(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('mrCanvas', mrCanvas);

    mrCanvas.$inject = ['config'];

    /* @ngInject */
    function mrCanvas(config) {
        // Usage: <mr-canvas x=":x" y=":y" facing=":facing"></mr-canvas>
        //
        // Creates: Draws a grid and positions the rover
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                x: '=',
                y: '=',
                facing: '='
            },
            template: '<div><canvas id="canvas"></canvas></div>'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    /* @ngInject */
    function Controller($scope, $log) {
        var vm = this,
            canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

        canvas.width = 430;
        canvas.height = 430;
        function makeGrid(square, horizontalPosition, verticalPosition, facing) {
            if (square === 1) {
                context.clearRect(horizontalPosition, verticalPosition, 80, 80);
                context.strokeRect(horizontalPosition + 5, verticalPosition + 5, 70, 70);
                context.fillStyle = '#bada55';
                rotate(horizontalPosition, verticalPosition, facing);

            } else {
                context.fillStyle = '#ccc';
                context.fillRect(horizontalPosition, verticalPosition, 80, 80);

            }
        }

        function inverseY(y) {
            var i;
            switch (y) {
                case 1:
                    i = 5;
                    break;
                case 2:
                    i = 4;
                    break;
                case 3:
                    i = 3;
                    break;
                case 4:
                    i = 2;
                    break;
                case 5:
                    i = 1;
                    break;
            }
            return i;
        }

        function rotate(horizontalPosition, verticalPosition, facing) {
            switch (facing) {
                case 'N':
                    context.fillRect(horizontalPosition + 25, verticalPosition, 30, 30);
                    break;
                case 'E':
                    context.fillRect(horizontalPosition + 50, verticalPosition + 25, 30, 30);
                    break;
                case 'S':
                    context.fillRect(horizontalPosition + 25, verticalPosition + 50, 30, 30);
                    break;
                case 'W':
                    context.fillRect(horizontalPosition, verticalPosition + 25, 30, 30);
                    break;
            }

        }

        function position(posx, posy, facing) {
            var y,
                x;
            for (y = 0; y < 5; y++) {
                for (x = 0; x < 5; x++) {
                    var square = (posx === x + 1 && inverseY(posy) === y + 1) ? 1 : 0,
                        newXPos = (5 * (x + 1)) + (80 * x),
                        newYPos = (5 * (y + 1)) + (80 * y);

                    makeGrid(square, newXPos, newYPos, facing);
                }
            }
        }
        $scope.$watchGroup(['vm.x', 'vm.y', 'vm.facing'], function(current, original) {
            position(vm.x, vm.y, vm.facing);
        });
        position(vm.x, vm.y, vm.facing);

    }
})();
