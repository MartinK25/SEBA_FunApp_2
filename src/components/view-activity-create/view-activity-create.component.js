/**
 * Created by martin on 04.07.2017.
 */
'use strict';

import template from './view-activity-create.template.html';

/*Add activity service*/
import ActivityService from './../../services/activity/activity.service';
import UserService from './../../services/user/user.service';

class ViewActivityCreateComponent {
    constructor(){
        this.controller = ViewActivityCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewActivityCreate';
    }
}


class ViewActivityCreateComponentController{
    constructor($state, ActivityService,UserService){
        this.activity = {};
        this.$state = $state;
        this.ActivityService = ActivityService;
        this.UserService = UserService;
        this.types = ['Jogging','Climbing','Cycling','Hiking','Dancing','Soccer','Skiing','Music','Other'];
    }

    cancel() {
        this.$state.go('activities',{});
    };

    save() {
        if (this.activityForm.$valid) {
            let user = this.UserService.getCurrentUser();

            this.activity['user'] = user['_id'];
            this.ActivityService.create(this.activity).then(data => {
                let _id = data['_id'];
                this.$state.go('activities', {activityId: _id});

            })
        }
        ;

    };


    static get $inject(){
        return ['$state', ActivityService.name, UserService.name];
    }

}


export default ViewActivityCreateComponent;