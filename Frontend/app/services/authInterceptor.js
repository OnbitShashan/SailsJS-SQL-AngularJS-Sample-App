angular.module('myApp')
.factory('AuthInterceptor', function($q, $injector) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        var token;
        if (localStorage.getItem('bearer_token')) {
          token = localStorage.getItem('bearer_token')
        }
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config || $q.when(config);
      },
      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('bearer_token');
          $('.modal-backdrop').remove();
          $injector.get('$location').path('/');
        }
        return response || $q.when(response);
      }
    }
  })

  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
  