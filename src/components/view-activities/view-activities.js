'use strict';

import angular from 'angular';

import ViewActivitiesComponent from './view-activities.component';


export default angular.module('ViewActivities', [])
    .component(ViewActivitiesComponent.name, new ViewActivitiesComponent);