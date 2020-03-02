import React from 'react';
// import { stat } from 'fs';
import '../css/masterHeader.css'

export default class Upto80 extends React.Component {
    constructor() {
        super();
        this.state = {
            saleImage: [
                {
                    image: 'https://epicwoo.com/demo/wp-content/uploads/2018/02/homepage-v3-banner.jpg'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.saleImage.map((item) => {
                    return <img className="imgg3" src={item.image} />
                })}
            </div>
        )
    }
}