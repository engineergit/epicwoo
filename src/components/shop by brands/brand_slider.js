import React from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import InfiniteCarousel from "react-leaf-carousel";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import zIndex from "@material-ui/core/styles/zIndex";
import "../css/cat_cards.css";
import QuickOrder from "../cat-cards/quick-order";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/cart";
const Box = posed.div({
  hidden: { opacity: 0, delay: 3000 },
  visible: { opacity: 1, delayChildren: 3000 }
});
const imageStyle = {
  width: "200px",
  height: "250px",
  marginLeft: "1px"
};
const styles = {
  card: {
    maxWidth: 345,
    backgroundColor: "#fff5f5"
  },
  media: {
    height: 140
  }
};
class BrandSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        // {
        //   id: 11,
        //   name: "p-11",
        //   img1:
        //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
        //   price: "200"
        // },
        // {
        //   id: 12,
        //   name: "p-12",
        //   img1:
        //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-32-1.jpg",
        //   price: "1000"
        // },
        // {
        //   id: 13,
        //   name: "p-13",
        //   img1:
        //     " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-80.jpg",
        //   price: "900"
        // },
        // {
        //   name: "p-14",
        //   id: 14,
        //   img1:
        //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
        //   price: "700"
        // },
        // {
        //   name: "p-15",
        //   id: 15,
        //   img1:
        //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
        //   price: "300"
        // }
      ]

      // isHowering: false
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ items: props.products });
  }
  Click() {
    console.log("jaha");
  }
  addItemToCart = item => () => {
    this.props.dispatch(dis => dis(addToCart(item)));
  };
  render() {
    if (
      this.props.products &&
      this.props.products.length &&
      !this.dataLoaded
    ) {
      this.dataLoaded = true;
      setTimeout(() => {
        this.setState({ items: this.props.products });
        // this.forceUpdate();
      });
    }
    if (!this.state.items.length) {
      return <div />;
    }
    return (
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        {this.state.items.map(item => {
          if (item.brand != "null") {
            return (
              <div className="cards">
                <Card
                  className={styles.card + " cardManager"}
                  style={styles.card}
                  // onMouseEnter={() => {

                  //     this.setState({
                  //         isHowering: true
                  //     });
                  // }}
                  // onMouseLeave={() => {
                  //     this.setState({
                  //         isHowering: false
                  //     });
                  // }}
                >
                  <CardActionArea onClick={this.Click}>
                    <img
                      style={imageStyle}
                      className="image-list"
                      src={item.imgSrc}
                    />
                    <div className="tag_head">
                      <span className="price_title">Title:{item.title}</span>
                      <br />
                      <span className="price_tag">Price:${item.price}</span>
                    </div>
                  </CardActionArea>
                  <br />
                  <a href="#" className="buyNowbtn">
                    Buy Now
                  </a>
                  <div className="effects">
                    <span>
                      <QuickOrder />
                    </span>
                    {this.props.Authentication.user && (
                      <span onClick={this.addItemToCart(item)} className="add">
                        {" "}
                        Add to Cart
                      </span>
                    )}
                  </div>
                </Card>
              </div>
            );
          }
        })}
      </InfiniteCarousel>
    );
  }
}
const mapStateToProps = store => ({
  data: store.ProductReducer,
  Authentication: store.Authentication
});
export default connect(mapStateToProps)(BrandSlider);
