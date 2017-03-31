var app = angular.module('MEAN_belt', ['ngRoute','ngCookies'])
app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'dashboardController'
        })

        .when('/finalbids', {
            templateUrl: 'partials/finalbids.html',
            controller: 'dashboardController'
        })

        
        .otherwise({
            redirectTo:'/home'
        })
})