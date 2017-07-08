/**
 * Created by martin on 08.07.2017.
 */
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-register.template.html';


class ViewRegisterComponent {
    constructor(){
        this.controller = ViewRegisterComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewRegister';
    }
}

class ViewRegisterComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
        this.register = {};
    }

    submit(){
        let user = this.register.username;
        let password = this.register.password;

        this.UserService.register(user,password).then(()=> {
            this.$state.go('activities',{});
        });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }
}

export default ViewRegisterComponent;