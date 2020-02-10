(function() {
    'use strict';
  
  
  angular.module('myApp')
  
  .controller('AddEditProductController', ['ProductService','$scope', '$routeParams', '$location',AddEditProductController]);
    function AddEditProductController(ProductService, $scope, $routeParams, $location) {

      $scope.product = {};
      $scope.product.available = false; // default value


      $scope.getProductById = async function(productId) {
        let response;
        console.log($routeParams.id)
        if($routeParams.id != 'create'){
          response = await ProductService.getProductById(productId);
        }
        let categoriesAndMerchants = await ProductService.getAllCategoriesAndMerchants();
  
        if(response && response.status === 200){
          $scope.product = response.data;
          // console.log($scope.product);
          $scope.$apply();
        }

        if(categoriesAndMerchants.status === 200){
          $scope.categories = categoriesAndMerchants.data.categories;
          $scope.merchants = categoriesAndMerchants.data.merchants;

          if($routeParams.id == 'create' &&  $scope.categories[0]){
            $scope.product.category =  $scope.categories[0]; // default value
          }
          if($routeParams.id == 'create' &&  $scope.categories[0]){
            $scope.product.merchant = $scope.merchants[0]; // default value
          }

         
          // console.log($scope.categories);
          // console.log($scope.merchants);
          $scope.$apply();
        }
      };
  
      $scope.getProductById($routeParams.id);


      $scope.addOrUpdateProduct = async function(product){
        console.log(product);
        let copy = {...product}
        copy.category = product.category.id;
        copy.merchant = product.merchant.id;

        console.log(copy);
        let response 
        if(copy.id){
          response = await ProductService.updateProductById(product.id, copy);
        }else{
          response = await ProductService.createProduct(copy);
        }
        console.log(response);
        
        if(response.status === 200){
          $location.path('/product');
          $scope.$apply();
        }

      }

    }
  })();