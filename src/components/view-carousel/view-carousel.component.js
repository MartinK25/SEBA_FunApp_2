'use strict';

import template from './view-carousel.template.html';
import './view-carousel.style.css';
import './swiper.min.css';
import Swiper from 'swiper';

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
    constructor($state){
        this.$state = $state;

    }

    $onInit() {
        new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,
            watchSlidesProgress: true,
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            paginationType: 'bullets',


            pagination: '.swiper-pagination',


            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',


            scrollbar: '.swiper-scrollbar',
        });
    }

    static get $inject(){
        return ['$state'];
    }

}

export default ViewCarouselComponent;