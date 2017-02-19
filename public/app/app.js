angular.module('Registration', ['ngRoute', 'firebase'])
.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if(error == 'AUTH_REQUIRED') {
      alert('Sorry, you must log in to access that page.');
      $location.path('/login');
    }
  });
}])
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
      templateUrl: 'app/login/success.html',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        }
      }
    })
    .otherwise({ redirectTo: '/register' });
}]);