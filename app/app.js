/**
 * Created by martin on 15.06.2017.
 */
//Code for configuring the routes:
(function() {
    'use strict';

    angular.module('app', [
        "ui.router",
        "ngCookies"
    ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("users", {
                url: "/",
                templateUrl: "./views/user/index.html",
                controller: "userController"
            }).state("create", {
                url: "/create",
                templateUrl: "./views/user/create.html",
                controller: "userController"
            }).state("createActivity", {
                url: "/createActivity",
                templateUrl: "./views/user/createActivity.html",
                controller: "activityController"
            }).state("activity", {
                url: "/activities",
                templateUrl: "./views/user/activity.html",
                controller: "activityController"
            }).state("userlist", {
                url: "/userlist",
                templateUrl: "./views/user/userlist.html",
                controller: "userlistController"
            }).state("login", {
                url: "/login",
                templateUrl: "./views/login/login.view.html",
                controller: "LoginController",
                controllerAs: 'vm'
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "./views/user/create.html",
                controller: "userController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "./views/user/details.html",
                controller: "userController"
            });
        })
        .constant("globalConfig", {
            apiAddress: "http://localhost:3000/api"
        });
    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
})();