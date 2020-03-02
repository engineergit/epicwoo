import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import '../css/masterHeader.css';
import '../css/masterHeader.css'
import SimpleSelect from './droopdown';
import {Link} from 'react-router-dom'
const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

function DenseAppBar(props) {
    const { classes } = props;
    // changeCat=()=>{
    //     props.cat(false)
    // }
    return (
        <div className={classes.root} >
            <AppBar position="static" >
                <Toolbar variant="dense">
                    <SimpleSelect cat = {props.catAvail} val = {props.cat}/>
                    <div className="links">
                        <Link to = '/' className = 'cat-header-link'  onClick = {()=>{props.cat(false)}}>HOME PAGE</Link>
                        {/* <a href="">BLOG</a>
                        <a href="">LATEST ARRIVAL</a>
                        <a href="">WEEKLY DEALS</a> */}
                        <Link to = '/best_selling_products' className = 'cat-header-link'  onClick = {()=>{props.cat(false)}}>TOP SELLING</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

DenseAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);
