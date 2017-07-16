
'use strict';

import template from './view-activity-join.template.html';
import ActivityService from './../../services/activity/activity.service';
import UserService from './../../services/user/user.service';
import ParticipantsService from './../../services/participants/participants.service';

class ViewActivityJoinComponent {
    constructor(){
        this.controller = ViewActivityJoinComponentController;
        this.template = template;
        this.bindings = {
            activity: '<',
        }

    }

    static get name() {
        return 'joinActivity'; /*what does that do?*/
    }


}

class ViewActivityJoinComponentController{
    constructor($state,ActivityService,UserService){
        this.$state = $state;
        this.ActivityService = ActivityService;
        this.UserService = UserService;

    }


    join () {
        /*if (this.UserService.isAuthenticated()) {
            let _id = this.activity['_id'];
            ...
        } else {
            this.$state.go('login',{});
        }
        this.Activity
*/
    } /*todo!*/

    cancel () {
        this.$state.go('activities',{});
    };


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.activity['_id'];

            this.ActivityService.delete(_id).then(response => {
                this.$state.go('activities',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };


    getPosterURL(){
        let posterURL = 'http://placehold.it/32x32';
        return posterURL;
    }

    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}


export default ViewActivityJoinComponent;
