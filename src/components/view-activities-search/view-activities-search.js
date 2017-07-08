/**
 * Created by martin on 07.07.2017.
 */
'use strict';

import angular from 'angular';

import ViewActivitiesSearchComponent from './view-activities-search.component';


export default angular.module('SearchActivities', [])
    .component(ViewActivitiesSearchComponent.name, new ViewActivitiesSearchComponent);