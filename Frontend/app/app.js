'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute'
])

.constant('SERVER_URL', 'http://localhost:1337')

.run(['$rootScope', '$location', 'AuthService', function ($rootScope, $location, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next) {
    if (!AuthService.checkPermissionForView(next)){
        console.log("No Access!")
        event.preventDefault();
        $location.path("/");
    }
  });
}])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider

  .when('/product' , {
    templateUrl: 'product/products.html',  
    controller: 'ProductController',
    requiresAuthentication: true
  })

  .when('/product/:id' , {
    templateUrl: 'product/addEdit/addEditProduct.html',  
    controller: 'AddEditProductController',
    requiresAuthentication: true
  })

  .when('/', {
    templateUrl: 'login/login.html', 
    controller: 'LoginController'
  })

  $routeProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
}]);

