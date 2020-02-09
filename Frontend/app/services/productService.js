/**
 * Created by Sudarshana on 10/10/19.
 * @description DataService is responsible for sharing data between Controllers.
 **/
(function () {
    'use strict'
    angular.module('myApp').service('ProductService', ['SERVER_URL', '$http', ProductService]);

    function ProductService(SERVER_URL, $http) {
        return {
            getAllProducts: function(){
                return $http.get(`${SERVER_URL}/product/all`);
            },

            createProduct: function(data){
                return $http.post(`${SERVER_URL}/product/add`, data);
            },

            deleteProductById: function(productId){
                return $http.delete(`${SERVER_URL}/product/${productId}`);
            },

            editProductById: function(productId){
                return $http.put(`${SERVER_URL}/product/${productId}`);
            },

            getProductById: function(productId){
                return $http.get(`${SERVER_URL}/product/${productId}`);
            }


        }
    }
})();