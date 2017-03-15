(function() {
    'use strict';

    angular
        .module('app')
        .controller('MashiriController', MashiriController);

    MashiriController.$inject = ['$http', 'MashiriFactory'];

    /* @ngInject */
    function MashiriController($http, MashiriFactory) {
        var vm = this;
        vm.title = 'Controller';
        
        activate();

        ////////////////

        function activate() {

                MashiriFactory.getCourtDecisions().then(function(data){
                // console.log(JSON.stringify(data));

                    data.results.forEach( function( result )
                    {
                        console.log('case name : ' + result.case_name ); 
                        vm.getCase = result;
                    });
            
                
                })
                MashiriFactory.getLawyer().then(function(data){
                // console.log(JSON.stringify(data));

                    data.results.forEach( function( result )
                    {
                        console.log('Lawyer name : ' + result.id ); 
                        vm.getLawyer = result;
                    });
            
                
                })
        }
    }
})();