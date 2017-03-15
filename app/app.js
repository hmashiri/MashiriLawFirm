(function() {
    'use strict';


    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise("/home");

        $stateProvider
        	.state("home", {
        		url:"/home",
        		templateUrl: "app/partials/home.html",
        		controller: "MashiriController",
        		controllerAs: "vm"
        	})
            .state("collectiondefense",{
                url: "/collectiondefense",
                templateUrl: "app/partials/collectiondefense.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("about", {
                url: "/about",
                templateUrl: "app/partials/about.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("creditrepair", {
                url: "/creditrepair",
                templateUrl: "app/partials/creditrepair.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("identitytheft", {
                url: "/identitytheft",
                templateUrl: "app/partials/identitytheft.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("personalinjury", {
                url: "/personalinjury",
                templateUrl: "app/partials/personalinjury.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("unfairdebt", {
                url: "/unfairdebt",
                templateUrl: "app/partials/unfairdebt.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("employmentlaw", {
                url: "/employmentlaw",
                templateUrl: "app/partials/employmentlaw.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("unwantedtel", {
                url: "/unwantedtel",
                templateUrl: "app/partials/unwantedtel.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("practiceareas", {
                url: "/practiceareas",
                templateUrl: "app/partials/practiceareas.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("caseresults", {
                url: "/caseresults",
                templateUrl: "app/partials/caseresults.html",
                controller: "MashiriController",
                controllerAs: "vm"
            })
            .state("blog", {
                url: "/blog",
              	templateUrl: "app/partials/blog.html",
                controller: "MashiriController",
                controllerAs: "vm"

            })
            .state("contact", {
            	url: "/contact",
            	templateUrl:"app/partials/contact.html",
            	controller: "MashiriController",
            	controllerAs: "vm"
            })
    })
})();
