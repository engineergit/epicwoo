import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import QuickOrder from "../cat-cards/quick-order";
import "../css/computing_shop.css";
import { addToCart } from "../../Redux/actions/cart";
const imageStyle = {
  width: "60%",
  height: "250px",
  marginLeft: "1px"
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
      items: [
        {
          id: 16,
          name: "p-16",
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-39-350x340.jpg",
          price: "200"
        },
        {
          name: "p-17",
          id: 17,
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
          price: "1000"
        },
        {
          name: "p-18",
          id: 18,
          img1:
            " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-35-1-350x340.jpg",
          price: "900"
        },
        {
          name: "p-19",
          id: 19,
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
          price: "700"
        },
        {
          name: "p-20",
          id: 20,
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-28-150x150.jpg",
          price: "300"
        }
      ]

      // isHowering: false
    };
  }
  addItemToCart = item => () => {
    this.props.dispatch(dis => dis(addToCart(item)));
  };
  render() {
    debugger;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <React.Fragment>
          <Grid container spacing={8}>
            <Grid container item xs={12} spacing={24}>
              {this.state.items.map(item => {
                return (
                  <div className="cards">
                    <Card
                      className={styles.card + " cardManager"}
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
                      <CardActionArea onClick={() => console.log(item)}>
                        <img
                          style={imageStyle}
                          className="image-list"
                          src={item.img1}
                        />
                        <span className="price_tag">Price:${item.price}</span>
                      </CardActionArea>
                      <br />
                      <a href="#" className="buyNowbtn">
                        Buy Now
                      </a>
                      <div className="effects">
                        <span>
                          <QuickOrder />
                        </span>
                        {this.props.Authentication
                          ? this.props.Authenticated.user && (
                              <span
                                onClick={this.addItemToCart(item)}
                                className="add"
                              >
                                {" "}
                                Add to Cart
                              </span>
                            )
                          : null}
                      </div>
                    </Card>
                  </div>
                );
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

export default withStyles(styles)(BestSellers);
