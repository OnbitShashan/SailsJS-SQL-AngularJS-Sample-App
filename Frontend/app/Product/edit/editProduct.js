(function() {
    'use strict';
  
  
  angular.module('myApp')
  
  .controller('EditProductController', ['ProductService','$scope', '$routeParams',EditProductController]);
    function EditProductController(ProductService, $scope, $routeParams) {
    
      $scope.getProductById = async function(productId) {
  
        let response = await ProductService.getProductById(productId);
        let categoriesAndMerchants = await ProductService.getAllCategoriesAndMerchants();
  
        if(response.status === 200){
          $scope.product = response.data;
          console.log($scope.product);
          $scope.$apply();
        }

        if(categoriesAndMerchants.status === 200){
          $scope.categories = categoriesAndMerchants.data.categories;
          $scope.merchants = categoriesAndMerchants.data.merchants;
          console.log($scope.categories);
          console.log($scope.merchants);
          $scope.$apply();
        }
      };
  
      $scope.getProductById($routeParams.id);


      $scope.updateProduct = async function(product){
        console.log(product);
        let copy = {...product}
        copy.category = product.category.id;
        copy.merchant = product.merchant.id;

        console.log(copy);

        let response = await ProductService.updateProductById(product.id, copy);
        console.log(response);
        
        if(response.status === 200){
         
        }

      }
      
    }
  })();