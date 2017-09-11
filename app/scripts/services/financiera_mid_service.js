'use strict';

/**
 * @ngdoc service
 * @name financieraClienteApp.financieraMidService
 * @description
 * # financieraMidService
 * Service in the financieraClienteApp.
 */
angular.module('financieraMidService',[])
  .factory('financieraMidRequest', function ($http) {
    // Service logic
    // ...
    var path = "http://127.0.0.1:8086/v1/";
    //var path = "http://10.20.0.254/financiera_mid_api/v1/";
    // Public API here
    return {
      get: function (tabla,params) {
        return $http.get(path+tabla+"/?"+params);
      },
      post: function (tabla,elemento) {
        return $http.post(path+tabla,elemento);
      },
      put: function (tabla,id,elemento) {
        return $http.put(path+tabla+"/"+id,elemento);
      },
      delete: function (tabla,id) {
        return $http.delete(path+tabla+"/"+id);
      }
    };
  });
