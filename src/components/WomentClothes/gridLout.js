import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from './womenSlider'
import WomenCart from './women'
import NaveBar from './navebara'
import '../css/women.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container_Grid:{
    borderTop:"2px solid red",
     width:"90vw"
  }
});





class FullWidthGrid extends Component {

  state = {
    cat:''
  }

  checkCat=(val)=>{
    this.setState({cat:val})
  }
  render(){
    
    
    
    const { classes,products } = this.props;
    const {cat} = this.state
    return (
    
<div className="container_Grid">
       <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><NaveBar checkCat = {this.checkCat}/></Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper+'Slider'}><Slider/></Paper>
        </Grid> */}
        <Grid item xs={9}>
        <Paper><WomenCart products = {products?products:[]} cat={cat}/></Paper>
        </Grid>
      </Grid>
       
    </div>
  
  );
}
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
