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
    .when('/success', {
      templateUrl: 'app/login/success.html'
    })
    .otherwise({ redirectTo: '/login' });
}]);