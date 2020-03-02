import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { signupEpic } from "../../Redux/epics/authentication";
import "../css/masterHeader.css";
export default class SignUp extends React.Component {
  state = {
    open: false,
    email: "",
    username: "",
    password: "",
    city: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChangeHandler = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  submitHandler = () => {
    const { email, username, password, city } = this.state;
    console.log(this.state);
    signupEpic({ email, username, password, city });
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Register</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <h4 className="Title">Register Here</h4>
          <DialogContent>
            <span>Enter email</span>
            <TextField
              autoFocus
              onChange={this.onChangeHandler}
              name="email"
              value={this.state.email}
              margin="dense"
              id="email"
              label="email"
              type="email"
              fullWidth
              placeholder="Enter email"
            />
            <br />
            <br />
            <span>Enter username</span>
            <TextField
              value={this.state.username}
              onChange={this.onChangeHandler}
              autoFocus
              margin="dense"
              id="username"
              name="username"
              label="username"
              type="text"
              fullWidth
              placeholder="Enter username"
            />
            <br />
            <br />
            <span className="pass">Enter password</span>
            <TextField
              value={this.state.password}
              onChange={this.onChangeHandler}
              name="password"
              autoFocus
              margin="dense"
              id="password"
              label="password"
              type="password"
              fullWidth
              placeholder="Enter password"
            />
            <br />
            <br />
            <span>Enter your city name</span>
            <TextField
              autoFocus
              value={this.state.city}
              onChange={this.onChangeHandler}
              name="city"
              margin="dense"
              id="city"
              label="city"
              type="text"
              fullWidth
              placeholder="Enter city name"
            />
            <br />
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitHandler} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
