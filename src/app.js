'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import angularAnimate from 'angular-animate';

import './ui-bootstrap-tpls-2.5.0.js';

import ngMdIcons from 'angular-material-icons';

import smart_table from 'angular-smart-table';

import UserService from './services/user/user';
import ActivityService from './services/activity/activity';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewLogin from './components/view-login/view-login';
import ViewActivityCreate from './components/view-activity-create/view-activity-create';
import ViewActivities from './components/view-activities/view-activities';
import ViewActivity from './components/view-activity/view-activity';
import ViewActivityEdit from './components/view-activity-edit/view-activity-edit';
import ViewActivityJoin from './components/view-activity-join/view-activity-join';
import ViewRegister from './components/view-register/view-register';
import ViewActivitiesSearch from './components/view-activities-search/view-activities-search';
import ViewActivitiesMain from './components/view-activities-main/view-activities-main';
import ViewCarousel from './components/view-carousel/view-carousel';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    angularAnimate,
    ngMdIcons,
    smart_table,
    'ui.bootstrap',
    UserService.name,
    ActivityService.name,
    AppContent.name,
    ViewLogin.name,
    ViewActivityCreate.name,
    ViewActivities.name,
    ViewActivity.name,
    ViewActivityEdit.name,
    ViewActivityJoin.name,
    ViewRegister.name,
    ViewActivitiesSearch.name,
    ViewActivitiesMain.name,
    ViewCarousel.name
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);



angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;