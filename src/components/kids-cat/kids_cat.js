import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import masterHeader from "../css/masterHeader.css";
const styles = {
  card: {
    maxWidth: 300,
    display:'inline-block',
    marginLeft:30,

  },
  media: {
    height: 140
  }
};

class KidsCat extends React.Component {
  constructor() {
    super();
    this.state = {
      dataArray1: [
        {
          image:
            "https://cf-tup-assets.thredup.com/shop/images/Oct_2018/100118-kids-primary.jpg",
          head: "Kids Clothes",
          detail:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
          image:
            "https://s7d2.scene7.com/is/image/ColumbiaSportswear2/04-18_21866_COL_US_SPR19_SunProtection_v3_M?fmt=pjpeg&scl=1",
          head: "Big Challange",
          detail:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"
        }
      ]
    };
  }
  render() {
    const { classes } = this.props;
    return this.state.dataArray1.map(item => {
      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <span>
                <b>{item.head}</b>
              </span>
              <br />
              <br />
              <span>{item.detail}</span>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" className="shopNow">
              Shop Now
            </Button>
          </CardActions>
        </Card>
      );
    });
  }
}

KidsCat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KidsCat);
