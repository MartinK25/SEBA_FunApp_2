/**
 * Created by martin on 05.07.2017.
 */
'use strict';

import template from './view-activities.template.html';
import ActivityService from './../../services/activity/activity.service';
import UserService from './../../services/user/user.service';
import './view-activities.style.css';



class ViewActivitiesComponent {
    constructor(){
        this.controller = ViewActivitiesComponentController;
        this.template = template;
        this.bindings = {
            activities: '<',
        }
    }

    static get name() {
        return 'viewActivities';
    }


}

class ViewActivitiesComponentController{
    constructor($state,ActivityService,UserService){
        this.$state = $state;
        this.ActivitiesService = ActivityService;
        this.UserService = UserService;

    }


    isAuthenticated(){
        return this.UserService.isAuthenticated();
    };

    goType (type) {
        this.$state.go('mainActivities',{type});
    };


    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}

export default ViewActivitiesComponent;