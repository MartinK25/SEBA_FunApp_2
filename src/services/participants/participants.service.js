/**
 * Created by martin on 06.07.2017.
 */
'use strict';


export default class ParticipantsService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/participants/`;

    }

    static get name(){
        return 'Service';
    }

    list() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);

            });

        });

    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


    create(participant) {
        let url = this.resourceUrl;
        return this.$http.post(url,participant).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    delete(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.delete(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        })
    }
/*
    update(activity) {

        let url = `${ this.resourceUrl }${ activity['_id'] }`;
        return this.$http.put(url,movie).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    } */


}