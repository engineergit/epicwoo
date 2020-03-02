import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import CartIcon from "./cartIcon";
import CartItems from "./cartItems";
import { connect } from "react-redux";
import { Typography, Divider } from "@material-ui/core";
import { updateQuantity, sendOrder } from "../../Redux/actions/cart";
import { sendOrder as sendOrderEpic } from "../../Redux/epics/cart";
import { from } from "rxjs";

const totalItems = items => {
  let qan = 0;
  console.log(items);
  items.forEach(p => {
    qan = qan + p.quantity;
  });
  return qan;
};

const totalPrice = items => {
  let price = 0;
  items.forEach(p => {
    price = price + p.price * p.quantity;
  });
  return price;
};

class ShowEmpty extends React.Component {
  state = {
    open: false,
    data: [
      // {link:'dussssssS'}
    ],
    isDisabled: false
  };

  handleClickOpen = () => {
    if (this.state.data.length == 0) {
      this.setState({ open: true });
      // console.log("empty state");
    } else {
      alert("state is not empty");
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitOrderCb = () => {
    this.setState({ isDisabled: false });
    this.props.dispatch(dis => dis(sendOrder()));
  };

  submitOrder = () => {
    this.setState(
      { isDisabled: true },
      sendOrderEpic(this.props.Cart.cart, this.submitOrderCb)
    );
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <span onClick={this.handleClickOpen}>
          <CartIcon />
        </span>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Cart</DialogTitle>
          <DialogContent>
            {this.props.Cart.cart.length === 0 ? (
              <h1>Cart is Empty!</h1>
            ) : (
              <React.Fragment>
                <CartItems />
                <Divider />
                <Typography variant="h5" gutterBottom>
                  Billing Info
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Total Items : {totalItems(this.props.Cart.cart)}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Total Price : {totalPrice(this.props.Cart.cart)}
                </Typography>
              </React.Fragment>
            )}
          </DialogContent>
          <DialogActions>
            {this.props.Cart.cart.length !== 0 && (
              <Button
                disabled={this.state.isDisabled}
                onClick={this.submitOrder}
                variant="contained"
                color="primary"
              >
                Order Now
              </Button>
            )}
            <Button
              variant="contained"
              onClick={this.handleClose}
              color="secondary"
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ShowEmpty.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};
const mapStateToProps = store => ({
  Cart: store.Cart
});

export default connect(mapStateToProps)(withMobileDialog()(ShowEmpty));
