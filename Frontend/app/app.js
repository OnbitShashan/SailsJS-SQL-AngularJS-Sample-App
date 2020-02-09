'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute'
])

.constant('SERVER_URL', 'http://localhost:1337')

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
  .when('/product' , {templateUrl: 'product/products.html',  controller: 'ProductController'})
  .when('/product/:id' , {templateUrl: 'product/edit/editProduct.html',  controller: 'EditProductController'})
  .when('/', {templateUrl: 'login/login.html', controller: 'LoginController'})
  $routeProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
}]);