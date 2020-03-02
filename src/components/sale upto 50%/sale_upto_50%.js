import React from 'react';
// import { stat } from 'fs';
import '../css/masterHeader.css'

export default class Upto50 extends React.Component {
    constructor() {
        super();
        this.state = {
            saleImage: [
                {
                    image: 'https://epicwoo.com/demo/wp-content/uploads/2018/03/banner.png'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.saleImage.map((item) => {
                    return <img className="imgg2" src={item.image} />
                })}
            </div>
        )
    }
}