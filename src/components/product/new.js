import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ProductActionCreator from "../../Redux/epics/product";

class New extends Component {
  state = {
    title: "",
    desc: "",
    brand: null,
    category: "",
    sales: 0,
    imgName: "",
    img: "",
    price: ""
  };

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleBrand = e => {
    this.setState({
      brand: e.target.value
    });
  };

  handleImage = e => {
    console.log(e.target.files[0]);
    this.setState({ img: e.target.files[0], imgName: e.target.files[0].name });
  };
  handleCat = e => {
    this.setState({
      category: e.target.value
    });
  };
  handleType = e => {
    this.setState({
      type: e.target.value
    });
  };
  handleDesc = e => {
    this.setState({
      desc: e.target.value
    });
  };
  handlePrice = e => {
    this.setState({
      price: e.target.value
    });
  };
  submitProduct = () => {
    ProductActionCreator.SaveProduct(this.state);
  };
  render() {
    console.log(this.props)
    return (
      <div className="new-product">
        <div className="heading" style={{ fontSize: "24px" }}>
          Add Product
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <div>Title:</div>
            <TextField
              id="standard-name"
              label="Title"
              style={{
                width: 400,
                marginLeft: "50px",
                marginBottom: "20px"
              }}
              value={this.state.title}
              placeholder="Enter Title"
              onChange={this.handleTitle}
            />
          </div>
          <div>
            <div>Description:</div>
            <TextField
              id="standard-textarea"
              label="Description"
              placeholder="Enter Description"
              multiline
              style={{
                width: 400,
                marginLeft: "50px",
                marginBottom: "20px"
              }}
              onChange={this.handleDesc}
              value={this.state.desc}
            />
          </div>
          <div>
            <div>Price:</div>

            <TextField
              id="standard-textarea"
              label="Price"
              placeholder="Enter the price"
              style={{
                width: 400,
                marginLeft: "50px",
                marginBottom: "20px"
              }}
              onChange={this.handlePrice}
              value={this.state.price}
            />
          </div>

          <div>
            <div>Brand</div>

            <TextField
              label="Brand"
              placeholder="Enter Brand"
              style={{
                width: 400,
                marginLeft: "50px",
                marginBottom: "20px"
              }}
              onChange={this.handleBrand}
              value={this.state.brand}
              margin="normal"
            />
          </div>

          <div>
            <div>Category</div>
            <FormControl
              style={{
                width: 400,
                marginLeft: "50px",
                marginBottom: "20px"
              }}
            >
              <InputLabel htmlFor="category">Choose Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleCat}

                // inputProps={{
                //     name: 'age',
                //     id: 'age-simple',
                // }}
              >
                <MenuItem value={"mobile"}>Mobile</MenuItem>
                <MenuItem value={"computing"}>computing</MenuItem>
                <MenuItem value={"electronics"}>electronics</MenuItem>
                <MenuItem value={"clothing"}>clothing</MenuItem>
                <MenuItem value={"furniture"}>furniture</MenuItem>
                <MenuItem value={"kitchen"}>kitchen</MenuItem>
                <MenuItem value={"health_and_fitness"}>
                  health and fitness
                </MenuItem>
                <MenuItem value={"home_and_living"}>Home and Living</MenuItem>
                <MenuItem value={"fashion"}>fashion</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <input
              onChange={this.handleImage}
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <div>Upload Image</div>
              <Button
                style={{
                  width: 400,
                  marginLeft: "50px",
                  marginBottom: "20px"
                }}
                component="span"
                color="primary"
              >
                Upload
              </Button>
              {this.state.imgName}
            </label>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.submitProduct}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
