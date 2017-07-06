/**
 * Created by martin on 06.07.2017.
 */
'use strict';

import angular from 'angular';

import ViewActivityEditComponent from './view-activity-edit.component';


export default angular.module('ViewActivityEdit', [])
    .component(ViewActivityEditComponent.name, new ViewActivityEditComponent);