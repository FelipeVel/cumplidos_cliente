'use strict';

/**
 * @ngdoc service
 * @name cumplidosMidService.cumplidosMidRequest
 * @description
 * # cumplidosMidRequest
 * Factory in the cumplidosMidService.
 */
angular.module('titanMidService', [])
    .factory('titanMidRequest', function($http, CONF, token_service) {
        // Service logic
        // ...
        var path = CONF.GENERAL.TITAN_MID_SERVICE;
        
        // Public API here
        return {
            get: function(tabla, params) {
                if(angular.isUndefined(params)){
                    return $http.get(path + tabla, token_service.getHeader());
                }else{
                    return $http.get(path + tabla + "?" + params, token_service.getHeader());
                }
            },
            post: function(tabla, elemento) {
                return $http.post(path + tabla, elemento, token_service.getHeader());
            },
            put: function(tabla, id, elemento) {
                return $http.put(path + tabla + "/" + id, elemento, token_service.getHeader());
            },
            delete: function(tabla, id) {
                return $http.delete(path + tabla + "/" + id, token_service.getHeader());
            }
        };
    });