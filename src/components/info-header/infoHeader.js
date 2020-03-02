import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../css/infoHeader.css';
// import CustomizedSwitches from './switchicon';

const styles = {
    root: {
        flexGrow: 1,
    },

};

function InfoHeader(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
            {/* <CustomizedSwitches/> */}
                <Toolbar>
                    <Typography variant="h6" color="inherit" align='left' style = {{marginRight:'280px'}}>
                        <span className="span">
                            email:<a href="mailto:faisalmaxi60@gmail.com">info@epicwoo.com </a>
                        </span>
                        <span className="span2">
                            phone:+922074950308
                        </span>
                    </Typography>
                    <Typography variant="h5" color="inherit" align='right'>
                        <span className="span">
                            Delivery: Free Home Delivery
                        </span>
                        <span className="span2">
                            Cash:Cash on Delivery
                        </span>
                        <span className="span2">
                            Gifts: Exclusive Gift Cards
                        </span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

InfoHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoHeader);