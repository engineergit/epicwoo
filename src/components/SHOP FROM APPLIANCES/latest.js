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
import { Link } from "react-router-dom";
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
class Latest extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 21,
          name: "p-21",
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
          price: "200"
        },
        {
          name: "p-22",
          id: 22,
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-32-1.jpg",
          price: "1000"
        },
        {
          name: "p-23",
          id: 23,
          img1:
            " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-80.jpg",
          price: "900"
        },
        {
          name: "p-24",
          id: 24,
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
          price: "700"
        },
        {
          name: "p-25",
          id: 25,
          img1:
            "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
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
                      <Link to={"/productDetail/" + item.id}>
                        <CardActionArea onClick={this.Click}>
                          <img
                            style={imageStyle}
                            className="image-list"
                            src={item.img1}
                          />
                          <span className="price_tag">Price:${item.price}</span>
                        </CardActionArea>
                      </Link>
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
              })}
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}
Latest.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = store => ({
  Authentication: store.Authentication
});
export default connect(mapStateToProps)(withStyles(styles)(Latest));
