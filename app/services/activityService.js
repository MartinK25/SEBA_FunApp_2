/**
 * Created by martin on 17.06.2017.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .factory('activityService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getActivities: function() {
                url = globalConfig.apiAddress + "/user";
                return $http.get(url);
            },
            getActivity: function(id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.get(url);
            },
            createActivity: function(user) {
                url = globalConfig.apiAddress + "/user";
                return $http.post(url, user);
            },
            updateActivity: function(user) {
                url = globalConfig.apiAddress + "/user/" + user._id;
                return $http.put(url, user);
            },
            deleteActivity: function(id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.delete(url);
            }
        };
    }
})();