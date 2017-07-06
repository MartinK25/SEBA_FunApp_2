'use strict';

/*import MoviesComponent from './../components/view-movies/view-movies.component';
import MovieComponent from './../components/view-movie/view-movie.component';
import MovieEditComponent from './../components/view-movie-edit/view-movie-edit.component';
import MovieCreateComponent from './../components/view-movie-create/view-movie-create.component';*/
import LoginComponent from './../components/view-login/view-login.component';

import ActivityCreateComponent from './../components/view-activity-create/view-activity-create.component';
import ActivitiesComponent from './../components/view-activities/view-activities.component';
import ActivityComponent from './../components/view-activity/view-activity.component';
import ActivityEditComponent from './../components/view-activity-edit/view-activity-edit.component';
import ActivityJoinComponent from './../components/view-activity-join/view-activity-join.component';

import MoviesService from './../services/movies/movies.service';
import ActivityService from './../services/activity/activity.service';


resolveMovie.$inject = ['$stateParams', MoviesService.name];
function resolveMovie($stateParams,moviesService){
    return moviesService.get($stateParams.movieId);
}
/*
resolveMovies.$inject = [MoviesService.name];
function resolveMovies(moviesService){
    return moviesService.list();
}*/

/* think not working:*/
resolveActivity.$inject = ['$stateParams', ActivityService.name];
function resolveActivity($stateParams,activityService){
    return activityService.get($stateParams.activityId);
}

resolveActivities.$inject = [ActivityService.name];
function resolveActivities(activityService){
    return activityService.list();
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/activities");

    $stateProvider
        /*.state('movies', {
            url: '/movies',
            component: MoviesComponent.name,
            resolve: {
                movies : resolveMovies
            }
        })*/
        .state('activities', {
            url: '/activities',
            component: ActivitiesComponent.name,
            resolve: {
                activities : resolveActivities
            }
        })
     /*   .state('movieAdd', {
            url: '/movies/new',
            component: MovieCreateComponent.name
        })
        .state('movie', {
            url: '/movies/:movieId',
            component: MovieComponent.name,
            resolve: {
                movie : resolveMovie
            }

        })
        .state('movieEdit', {
            url: '/movies/:movieId/edit',
            component: MovieEditComponent.name,
            resolve: {
                movie : resolveMovie
            }
        })*/
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })

        .state('createActivity', {
            url: '/createActivity',
            component: ActivityCreateComponent.name,
        })

        .state('activity', {
            url: '/activity/:activityId',
            component: ActivityComponent.name,
            resolve: {
                activity : resolveActivity
            }
        })

        .state('editActivity', {
            url: '/editActivity/:activityId',
            component: ActivityEditComponent.name,
            resolve: {
                activity : resolveActivity
            }
        })

        .state('joinActivity', {
            url: '/joinActivity/:activityId',
            component: ActivityJoinComponent.name,
            resolve: {
                activity : resolveActivity
            }
        })


}

