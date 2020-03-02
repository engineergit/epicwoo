import React, { Component } from "react";
import "../css//women.css";
import posed, { PoseGroup } from "react-pose";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import Button from '@material-ui/core/Button';
import CardActionArea from "@material-ui/core/CardActionArea";
import Slider from "./womenSlider";
import NaveBar from "./navebara";
import path from 'path'

class WomenCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 26,
          name:"p-26",
          img1:
            "//sc01.alicdn.com/kf/HTB1IACbg5QnBKNjSZFmq6AApVXaq/TONGYANG-Men-Winter-Hooded-Thick-Padded-Jacket.jpg_300x300.jpg",
          name: "WEDING DRESS"
        },
        {
          id: 27,
          name:"p-27",
          img1:
            "//sc01.alicdn.com/kf/HTB11msuKeuSBuNjSsziq6zq8pXam/Men-s-Custom-Vintage-Embroidered-Loose-Multi.jpg_300x300.jpg",
          name: "WEDING DRESS"
        },
        {
          id: 28,
          name:"p-28",
          img1:
            "//sc01.alicdn.com/kf/HTB1aic2OXXXXXcUXXXXq6xXFXXXl/Waterproof-softshell-man-jacket-outdoor-Fleece-Inside.jpg_300x300.jpg",
          name: "WEDING DRESS"
        },
  
        {
          id: 29,
          name:"p-29",
          img1:
            " //sc02.alicdn.com/kf/HTB1sBv2bQvoK1RjSZFDq6xY3pXag/Blaze-Jacket-Extremely-comfortable-stretch-hybrid-PrimaLoft.jpg_300x300.jpg",
          name: "WEDING DRESS"
        },
  
        {
          id: 30,
          name:"p-30",
          img1:
            "  https://epicwoo.com/demo/wp-content/uploads/2018/02/cb-banner-1-300x374.jpg",
          name: "WEDING DRESS"
        },
        {
          id: 31,
          name:"p-31",
          img1:
            "  https://epicwoo.com/demo/wp-content/uploads/2018/02/cb-banner-6-300x374.jpg",
          name: "WEDING DRESS"
        }
      ]
    };
  }
 


  render() {
    console.log("Women",this.props.products)
    let i = 0;
    return (
      <div className="images">
        {/* <div className="images"> */}

        {this.props.products.map((item) => {

          if(item.category.toLowerCase() == this.props.cat.toLowerCase() && i<8) {
            i++;

            return (
              <Card className="cardBox">
                <div>
                  <img className="imageItem" style = {{width:'100%'}} src={item.imgSrc} />
                  <div className="WedDress">{item.title}</div>
                </div>
              </Card>
            );
  
          }
        })}

        {/* </div> */}
      </div>
    );
  }
}
// MediaCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default WomenCart;
