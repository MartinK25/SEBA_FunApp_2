/**
 * Created by martin on 06.07.2017.
 */

'use strict';

import template from './view-activity-edit.template.html';

import ActivityService from './../../services/activity/activity.service';

class ViewActivityEditComponent {
    constructor(){
        this.controller = ViewActivityEditComponentController;
        this.template = template;
        this.bindings = {
            activity: '<',
        }
    }

    static get name() {
        return 'viewActivityEdit';
    }
}

class ViewActivityEditComponentController{
    constructor($state, ActivityService){
        this.model = {};
        this.$state = $state;
        this.MoviesService = ActivityService;
    }

    $onInit() {
        //Clone the Data
        this.model = JSON.parse(JSON.stringify(this.activity))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.activity));
        this.$state.go('activities',{});
    };

    save() {
        let _id = this.activity['_id'];

        this.MoviesService.update(this.model).then(data => {
            this.activity = JSON.parse(JSON.stringify(data));

            this.$state.go('activity',{ activityId:_id});
        });

    };

    delete() {
        let _id = this.activity['_id'];

        this.ActivityService.delete(_id).then(response => {
            this.$state.go('activities',{});
        });
    };

    static get $inject(){
        return ['$state', ActivityService.name];
    }

}


export default ViewActivityEditComponent;