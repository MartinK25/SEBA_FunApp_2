/**
 * Created by martin on 05.07.2017.
 */
'use strict';

import template from './view-activities-main.template.html';
import ActivityService from './../../services/activity/activity.service';
import UserService from './../../services/user/user.service';


class ViewActivitiesMainComponent {
    constructor(){
        this.controller = ViewActivitiesMainComponentController;
        this.template = template;
        this.bindings = {
            activities: '<',
        };

    }

    static get name() {
        return 'mainActivities';
    }


}

class ViewActivitiesMainComponentController{
    constructor($state,ActivityService,UserService){
        this.$state = $state;
        this.ActivitiesService = ActivityService;
        this.UserService = UserService;
        this.type = $state.params.type;
        console.log($state.params.type);

    }

    details (activity) {
        /*let _id = activity['_id'];*/
        let _id = activity['_id'];
        this.$state.go('activity',{ activityId: _id});
    };

    join (activity) {
        /*let _id = activity['_id'];*/
        let _id = activity['_id'];
        this.$state.go('joinActivity',{ activityId: _id});
    };


    edit (activity) {

        /* if (this.UserService.isAuthenticated()) { */
        let _id = activity['_id'];
        this.$state.go('editActivity',{ activityId:_id}); /*
         } else { */    /*remove need to login
         this.$state.go('login',{});
         } */
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

    getType(){
        return(this.type);
    }


    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}

export default ViewActivitiesMainComponent;
