angular.module('Registration', ['ngRoute', 'firebase'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });
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