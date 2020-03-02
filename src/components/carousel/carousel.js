import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/masterHeader.css';
export default class DemoCarousel extends Component {
    constructor() {
        super();
        this.state = {
            slideImages: [
                { nimage: 'https://epicwoo.com/demo/wp-content/uploads/2018/02/banner-1.jpg' },
                { nimage: 'https://epicwoo.com/demo/wp-content/uploads/2018/02/banner-2.jpg' },
                { nimage: 'https://epicwoo.com/demo/wp-content/uploads/2018/02/banner-4.jpg' },
            ]
        }
    }
    render() {
        return (
            <Carousel showThumbs={false}>
                {this.state.slideImages.map((item) => {
                    return (
                            <img src={item.nimage} />
                    )
                })
                }
            </Carousel>
        );
    }
}