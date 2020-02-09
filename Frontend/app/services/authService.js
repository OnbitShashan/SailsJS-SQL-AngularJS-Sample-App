/**
 * Created by Sudarshana on 10/10/19.
 * @description DataService is responsible for sharing data between Controllers.
 **/
(function () {
    'use strict'
    angular.module('myApp').service('AuthService', ['SERVER_URL', '$http', AuthService]);

    function AuthService(SERVER_URL, $http) {
        return {
            login: function(data){
                return $http.post(`${SERVER_URL}/user/login`,data);
            }
        }
    }
})();