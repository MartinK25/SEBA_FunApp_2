/**
 * Created by martin on 07.07.2017.
 */
'use strict';

import angular from 'angular';

import ViewActivitiesMainComponent from './view-activities-main.component';


export default angular.module('MainActivities', [])
    .component(ViewActivitiesMainComponent.name, new ViewActivitiesMainComponent);