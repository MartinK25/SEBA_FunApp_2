/**
 * Created by martin on 05.07.2017.
 */
'use strict';

import template from './view-activities.template.html';
import ActivityService from './../../services/activity/activity.service';
import UserService from './../../services/user/user.service';

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

    details (activity) {
        let _id = activity['_id'];
        this.$state.go('activity',{ activityId:_id});
    };

    edit (activity) {

        if (this.UserService.isAuthenticated()) {
            let _id = activity['_id'];
            this.$state.go('activityEdit',{ activityId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    newActivity(){

        if (this.UserService.isAuthenticated()) {
            this.$state.go('activityAdd',{});
        } else {
            this.$state.go('login',{});
        }

    }


    delete(activity) {
        if (this.UserService.isAuthenticated()) {
            let _id = activity['_id'];

            this.ActivitiesService.delete(_id).then(response => {
                let index = this.activities.map(x => x['_id']).indexOf(_id);
                this.activities.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
    };


    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}

export default ViewActivitiesComponent;