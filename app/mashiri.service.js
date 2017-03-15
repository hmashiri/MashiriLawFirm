(function() {
    'use strict';

    angular
        .module('app')
        .factory('MashiriFactory', MashiriFactory);

    MashiriFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function MashiriFactory($http, $q) {
        var service = {
            getCourtDecisions: getCourtDecisions,
            getLawyer: getLawyer
        };
        return service;

        ////////////////

        function getCourtDecisions() {
            
            var defer = $q.defer();

            $http({
                method:'GET',
                url:'https://www.courtlistener.com/api/rest/v3/clusters',
            })

            .then(function(response){

                if (typeof response.data === "object") {

                    defer.resolve(response.data);
                
                } else {

                    defer.reject(response);
                }
    
            },

            function(error){

                defer.reject(error);

            });

            return defer.promise;
        }

         function getLawyer() {
            
            var defer = $q.defer();

            $http({
                method:'GET',
                url:'https://api.avvo.com/api/4/lawyers/:id.json',
                params: { id: '9rzr4hzv7dyfpsy5b1kma7ml9' }
            })

            .then(function(response){

                if (typeof response.data === "object") {

                    defer.resolve(response.data);
                
                } else {

                    defer.reject(response);
                }
    
            },

            function(error){

                defer.reject(error);

            });

            return defer.promise;
        }
        
    }
})();