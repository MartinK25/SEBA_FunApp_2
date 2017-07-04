/**
 * Created by martin on 17.06.2017.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('activityController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'activityService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, activityService, $state, $stateParams) {
        $scope.activities = [];
        activityService.getActivities().then(function(res) {
            $scope.activities = res.data;
        }).catch(function(err) {
            console.log(err);
        });

        if ($state.current.name == "activitieschange") {
            $rootScope.Title = "Overview of activities";
            activityService.getActivities().then(function(res) {
                $scope.activities = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deleteActivity = function(id) {
                if (confirm('Are you sure to delete?')) {
                    activityService.deleteActivity(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("activities", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit activity";
            var id = $stateParams.id;
            activityService.getActivity(id).then(function(res) {
                $scope.activity = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(activity) {
                if ($scope.activityForm.$valid) {
                    activityService.updateActivity(activity).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("activities");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "activities") {
            $rootScope.Title = "Create activity";
            $scope.saveData = function(activity) {
                $scope.IsSubmit = true;
                if ($scope.activityForm.$valid) {
                    activityService.createActity(activity).then(function(res) {
                        if (res.data == "created") {
                            $state.go("activities");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();