'use strict';

import angular from 'angular';

import ActivityService from './activity.service';


export default angular.module('ActivityServiceDefinition', [])
    .service(ActivityService.name, ActivityService)