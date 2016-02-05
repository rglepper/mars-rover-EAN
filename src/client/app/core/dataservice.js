(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            moveRover: moveRover
        };

        return service;

        function moveRover(obj) {
            return $http
                .get('/api/x/' + obj.x +
                    '/y/' + obj.y +
                    '/facing/' + obj.facing +
                    '/instructions/' + obj.instructions)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for moveRover')(e);
            }
        }
    }
})();
