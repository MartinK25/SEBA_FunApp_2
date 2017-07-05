'use strict';

import angular from 'angular';

import ViewActivityComponent from './view-activity.component';


export default angular.module('ViewActivity', [])
    .component(ViewActivityComponent.name, new ViewActivityComponent);