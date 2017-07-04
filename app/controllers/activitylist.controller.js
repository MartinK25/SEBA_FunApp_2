/**
 * Created by martin on 19.06.2017.
 */
/**
 * Created by martin on 16.06.2017.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('activitylistController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'activityService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, activityService, $state, $stateParams) {
        $scope.activitys = [];
        $scope.activitys = $http.get("localhost:3000/api/activity/");

        if ($state.current.name == "activitylist") {
            $rootScope.Title = "User Listing";
            $http.get("localhost:3000/api/activity/").then(function(res) {
                $scope.activitys = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deleteUser = function(id) {
                if (confirm('Are you sure to delete?')) {
                    activityService.deleteUser(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("activitys", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit User";
            var id = $stateParams.id;
            activityService.getUser(id).then(function(res) {
                $scope.activity = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(activity) {
                if ($scope.activityForm.$valid) {
                    activityService.updateUser(activity).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("activitys");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "create") {
            $rootScope.Title = "Create User";
            $scope.saveData = function(activity) {
                $scope.IsSubmit = true;
                if ($scope.activityForm.$valid) {
                    activityService.createUser(activity).then(function(res) {
                        if (res.data == "created") {
                            $state.go("activitys");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();