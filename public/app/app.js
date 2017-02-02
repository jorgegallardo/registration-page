angular.module('Registration', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    })
    .when('/register', {
      templateUrl: 'app/login/registration.html',
      controller: 'RegController'
    })
    .otherwise({ redirectTo: '/login' });
}]);