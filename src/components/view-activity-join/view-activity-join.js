
/**
 * Created by martin on 06.07.2017.
 */
'use strict';

import angular from 'angular';

import ViewActivityJoinComponent from './view-activity-join.component';


export default angular.module('ViewActivityJoin', [])
    .component(ViewActivityJoinComponent.name, new ViewActivityJoinComponent);
