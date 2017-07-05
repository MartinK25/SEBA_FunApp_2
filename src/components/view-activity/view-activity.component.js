
'use strict';

import template from './view-activity.template.html';
import ActivityService from './../../services/activity/activity.service';
import UserService from './../../services/user/user.service';

class ViewActivityComponent {
    constructor(){
        this.controller = ViewActivityComponentController;
        this.template = template;
        this.bindings = {
            activity: '<',
        }

    }

    static get name() {
        return 'viewActivity';
    }


}

class ViewActivityComponentController{
    constructor($state,ActivityService,UserService){
        this.$state = $state;
        this.ActivityService = ActivityService;
        this.UserService = UserService;

    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.activity['_id'];
            this.$state.go('activityEdit',{ activityId:_id});
        } else {
            this.$state.go('login',{});
        }

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
        if (this.activity.hasOwnProperty('posters')) {
            if (this.activity.posters.hasOwnProperty('thumbnail')) {
                posterURL = this.activity.posters.thumbnail;
            } else if (this.activity.posters.hasOwnProperty('profile')) {
                posterURL = this.activity.posters.profile;
            } else if (this.activity.posters.hasOwnProperty('detailed')) {
                posterURL = this.activity.posters.detailed;
            } else {
                posterURL = this.activity.posters.original;
            }
        }
        return posterURL;
    }

    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}


export default ViewActivityComponent;
