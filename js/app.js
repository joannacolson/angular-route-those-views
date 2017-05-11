var app = angular.module('TVApp', ['TVCtrls', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    // define routes
    $stateProvider
        .state('TVs', {
            url: '/',
            templateUrl: 'views/home.html'
        });

}]);
