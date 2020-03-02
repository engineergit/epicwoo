import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import QuickOrder from "../cat-cards/quick-order";
import "../css/computing_shop.css";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/cart";
const imageStyle = {
  width: "200px",
  height: "250px",
  marginLeft: "1px"
};
const card = {
  maxWidth: 345,
  backgroundColor: "#fff5f5"
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});
class BestSellers extends React.Component {
  constructor() {
    super();
    this.state = {
      // items: [
      // {
      //   id: "50",
      //   name: "p-50",
      //   img1:
      //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-39-350x340.jpg",
      //   price: "200"
      // },
      // {
      //   id: "60",
      //   name: "p-60",
      //   img1:
      //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
      //   price: "1000"
      // },
      // {
      //   id: "70",
      //   name: "p-70",
      //   img1:
      //     " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-35-1-350x340.jpg",
      //   price: "900"
      // },
      // {
      //   id: "80",
      //   name: "p-80",
      //   img1:
      //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
      //   price: "700"
      // },
      // {
      //   id: "90",
      //   name: "p-90",
      //   img1:
      //     "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-28-150x150.jpg",
      //   price: "300"
      // }
      // ]
      // isHowering: false
    };
  }
  addItemToCart = item => () => {
    this.props.dispatch(dis => dis(addToCart(item)));
  };
  render() {
    const { classes } = this.props;
    let i = 0;
    debugger;
    return (
      <div className={classes.root}>
        <React.Fragment>
          <Grid container spacing={8}>
            <Grid container item xs={12} spacing={24}>
              {
                this.props.products.map(item => {
                if (item.best_seller && i < 6 && item.offer == "upto70") {
                  i = i + 1;
                  return (
                    <div className="cards">
                      <Card
                        className={styles.card + " cardManager"}
                        style={card}
                      >
                        <CardActionArea onClick={this.Click}>
                          <img
                            style={imageStyle}
                            // className="image-list"
                            src={item.imgSrc}
                          />
                          <div className="tag_head">
                            <span className="price_title">
                              Title:{item.title}
                            </span>
                            <br />
                            <span className="price_tag">
                              Price:${item.price}
                            </span>
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
                            <span
                              onClick={this.addItemToCart(item)}
                              className="add"
                            >
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
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}
BestSellers.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = store => ({
  Authentication: store.Authentication
});

export default connect(mapStateToProps)(withStyles(styles)(BestSellers));
