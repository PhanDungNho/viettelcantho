var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// app.controller('MainController', function($scope) {
//     $scope.title = "Welcome to My AngularJS App";
// });

// app.controller('HomeController', function($scope) {
//     $scope.message = "This is the home page.";
// });

// app.controller('AboutController', function($scope) {
//     $scope.message = "This is the about page.";
// });
