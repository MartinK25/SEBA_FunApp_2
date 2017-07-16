/**
 * Created by martin on 15.07.2017.
 */
'use strict';

import template from './view-carousel.template.html';

import ActivityService from './../../services/activity/activity.service';


class ViewCarouselComponent {
    constructor(){
        this.controller = ViewCarouselComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewCarousel';
    }
}

class ViewCarouselComponentController{
    constructor($state, ActivityService) {
        this.$state = $state;
        this.ActivityService = ActivityService;
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        var slides = this.slides = [];
        var currIndex = 0;

        this.addSlide = function () {
            var newWidth = 600 + slides.length + 1;
            console.log('//unsplash.it/' + newWidth + '/300')
            slides.push({
                /*image: '//unsplash.it/' + newWidth + '/300',*/
                image: './../../img/style/Sports.jpg',
                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                id: currIndex++
            });
        };

        this.randomize = function () {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };


        //muss das noch in den constructor? todo
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }

    // Randomize logic below

    assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    };

    generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }

    static get $inject(){
        return ['$state', ActivityService.name];
    }

}

export default ViewCarouselComponent;