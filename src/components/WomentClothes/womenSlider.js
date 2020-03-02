import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/women.css'
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            item: [
                {
                    img: "https://epicwoo.com/demo/wp-content/uploads/2018/02/cb-2.jpg" ,

                },
                {
                    img: '//sc01.alicdn.com/kf/HTB11msuKeuSBuNjSsziq6zq8pXam/Men-s-Custom-Vintage-Embroidered-Loose-Multi.jpg_300x300.jpg',
                },
                {

                    img: "//sc01.alicdn.com/kf/HTB1aic2OXXXXXcUXXXXq6xXFXXXl/Waterproof-softshell-man-jacket-outdoor-Fleece-Inside.jpg_300x300.jpg",
                },

            ]
        }
    }
    render() {
        return (
            <div  >
            <Carousel showThumbs={false}>
                {this.state.item.map((item) => {
                    return (
                        <img className="sliderImages" src={item.img} />
                    )
                })
                }
            </Carousel>
            </div>
        );
    }
}