
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


    edit() {

        if (this.UserService.isAuthenticated()) {
            let _id = this.activity['_id'];
            this.$state.go('editActivity',{ activityId:_id});
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
        let type = this.activity.type;
        let posterURL = './../../images/' + type + '.jpg';
        return posterURL;
    }

    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}


export default ViewActivityComponent;
