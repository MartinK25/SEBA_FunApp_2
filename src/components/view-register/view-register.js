/**
 * Created by martin on 08.07.2017.
 */
'use strict';

import angular from 'angular';

import ViewRegisterComponent from './view-register.component';


export default angular.module('ViewRegister', [])
    .component(ViewRegisterComponent.name, new ViewRegisterComponent);