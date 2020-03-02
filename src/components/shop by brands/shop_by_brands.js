import React, { Component } from "react";
import "../css/cat_cards.css";
import posed, { PoseGroup } from "react-pose";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import Button from '@material-ui/core/Button';
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};
const imagesContaner = {
  display: "flex",
  minWidth: 450,
  display: "flex",
  width: "1200px",
  position: "relative",
  flexWrap: "wrap",
  paddingLeft: 103

  // justifyContent:space-around
};
const imageStyle = {
  width: "60%",
  height: "250px",
  marginLeft: "1px"
};

const Box = posed.div({
  hidden: { opacity: 0, delay: 3000 },
  visible: { opacity: 1, delayChildren: 3000 }
});

class Brand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHowering: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card
          className={styles.card + " cardManager"}
          onMouseEnter={() => {
            this.setState({
              isHowering: true
            });
          }}
          onMouseLeave={() => {
            this.setState({
              isHowering: false
            });
          }}
        >
          <CardActionArea onClick={this.Click}>
            <img
              style={imageStyle}
              className="image-list"
              src={this.props.item.img1}
            />
          </CardActionArea>
          <a href="#" className="buyData">
            {this.props.item.buy}
          </a>
          {this.state.isHowering ? (
            <Box>
              <div className="effects">
                <a href="">Quick View</a>
                <a href=""> Search</a>
              </div>
            </Box>
          ) : null}
        </Card>
      </div>
    );
  }
}

class MediaCard extends Component {
  state = {
    items: [
      {
        img1:
          "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
        buy: "Buy Now"
      },
      {
        img1:
          "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-32-1.jpg",
        buy: "Buy Now"
      },
      {
        img1:
          " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-80.jpg",
        buy: "Buy Now"
      },
      {
        img1:
          "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
        buy: "Buy Now"
      },
      {
        img1:
          "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
        buy: "Buy Now"
      }
    ],

    isHowering: false
  };

  // handleMouseHover = () => {
  //     this.setState(this.toggleHoverState);
  // }

  // toggleHoverState(state) {
  //     return {
  //         isHowering: !state.isHowering,
  //     };
  // }

  constructor(props) {
    super(props);
  }

  Click = () => {
    console.log("hi");
  };
  render() {
    return (
      <div>
        <div className="kitchen_heading">
          <h2>KITCHEN ITEMS</h2>
        </div>

        <div style={imagesContaner}>
          {this.state.items.map((item, i) => {
            return <ItemCard item={item} />;
          })}
        </div>
      </div>
    );
  }
}
// MediaCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MediaCard);
