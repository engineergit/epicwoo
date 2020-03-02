import React, { Component } from "react";
import {list} from '../catList'
import { TextField,Button} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ProductActionCreator from "../../Redux/epics/product";
import { Modal,Button as Buttons} from "antd";
import '../css/productModal.css'


class Modals extends Component {
  state = {
    title: "",
    desc: "",
    brand: null,
    category: "",
    sales: 0,
    imgName: "",
    img: "",
    price: "",
    visible: false
  };

  handleOk = e => {
    console.log(e);
    ProductActionCreator.SaveProduct(this.state);

    this.props.click(false);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.props.click(false);
    console.log(e);
    this.setState({
      visible: false
    });
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
  };
  render() {
      let catList = list.map((el,i)=>{
            return <MenuItem value={el}>{el}</MenuItem>
        })
    return (
      <div className="modal">
        <Modal
          title="Add Product"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Buttons key="back" onClick={this.handleCancel}>
              Return
            </Buttons>,
            <Buttons key="submit" type="primary" onClick={this.handleOk}>
              Submit
            </Buttons>,
          ]}
        >
          {/* <div className="heading" style={{ fontSize: "24px" }}>
            Add Product
          </div> */}
          <div className = 'modal-head'>
            <div>
              <div>Title:</div>
              <TextField
                id="standard-name"
                label="Title"
                className = 'modal-textfield'
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
                className = 'modal-textfield'

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
                className = 'modal-textfield'

                onChange={this.handlePrice}
                value={this.state.price}
              />
            </div>

            <div>
              <div>Brand</div>

              <TextField
                label="Brand"
                placeholder="Enter Brand"
                className = 'modal-textfield'

                onChange={this.handleBrand}
                value={this.state.brand}
                margin="normal"
              />
            </div>

            <div>
              <div>Category</div>
              <FormControl
                className = 'modal-textfield'
                >
                <InputLabel htmlFor="category">Choose Category</InputLabel>
                <Select
                  value={this.state.category}
                  onChange={this.handleCat}

                  // inputProps={{
                  //     name: 'age',
                  //     id: 'age-simple',
                  // }}
                >{catList}
                </Select>
              </FormControl>
            </div>

            <div>
              <input
                onChange={this.handleImage}
                accept="image/*"
                className = 'modal-input-img'
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <div>Upload Image</div>
                <Button
                className = 'modal-textfield'

                  component="span"
                  color="primary"
                >
                  Upload
                </Button>
                {this.state.imgName}
              </label>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Modals;
