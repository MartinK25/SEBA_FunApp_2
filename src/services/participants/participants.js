/**
 * Created by martin on 06.07.2017.
 */
'use strict';

import angular from 'angular';

import ParticipantsService from './participants.service';


export default angular.module('ParticipantsServiceDefinition', [])
    .service(ParticipantsService.name, ParticipantsService)