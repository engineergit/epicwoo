import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../css/masterHeader.css";
export default class QuickOrder extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="qick_order">
        <div className="q" onClick={this.handleClickOpen}>
          Quick Order
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <h4 className="Title">Quick Order</h4>
          <DialogContent>
            <span>First Name</span>
            <TextField
              autoFocus
              margin="dense"
              id="fName"
              label="FirstName"
              type="text"
              fullWidth
              placeholder="Enter first name"
            />
            <br />
            <br />
            <span>Last Name</span>
            <TextField
              autoFocus
              margin="dense"
              id="lName"
              label="LastName"
              type="text"
              fullWidth
              placeholder="Enter last name"
            />
            <br />
            <br />
            <span className="pass">Email ID</span>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="email"
              type="email"
              fullWidth
              placeholder="Enter email ID"
            />
            <br />
            <br />
            <span>Enter your city name</span>
            <TextField
              autoFocus
              margin="dense"
              id="city"
              label="city"
              type="text"
              fullWidth
              placeholder="Enter city name"
            />
            <br />
            <br />
            <span>Enter Poatal code</span>
            <TextField
              autoFocus
              margin="dense"
              id="Pcode"
              label="PostalCode"
              type="text"
              fullWidth
              placeholder="Enter postal code"
            />
            <br />
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="secondary">
              Order Now
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
