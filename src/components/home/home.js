import React, { Component } from "react";
// import CustomizedSwitches from '../info-header/switchicon';
import "../css/infoHeader.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductActionCreator from "../../Redux/epics/product";
import { Button } from "@material-ui/core";
import KidsCat from "../kids-cat/kids_cat";
import DemoCarousel from "../carousel/carousel";
import CatSlider from "../cat-cards/cat_slider";
import Upto70 from "../sale upto 70%/sale_upto_70%";
import ComputingShop from "../computing shope/computing_shop";
import FullWidthGrid from "../WomentClothes/gridLout";
import Upto50 from "../sale upto 50%/sale_upto_50%";
import Fashion from "../FASHION & JEWELLERY/FASHION & JEWELLERY";
import Upto80 from "../sale upto 80%/sale_upto_80%";
import BrandSlider from "../shop by brands/brand_slider";
import Appliances from "../SHOP FROM APPLIANCES/SHOP FROM APPLIANCES";

import Modal from "./productModal";

class Home extends React.Component {
  constructor() {
    super();
  }
  state = {
    products: [],

    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  clickHandle = val => {
    this.setState({ visible: val });
  };

  render() {
    let products = this.props.data.payload
      ? this.props.data.payload.slice()
      : [];
    let sliderProducts = this.props.data.payload
      ? this.props.data.payload.slice()
      : [];
    if (this.props.val.val !== "") {
      products = products.filter((el, i) => {
        return (
          el.title.toLowerCase().includes(this.props.val.val.toLowerCase()) ||
          el.desc.toLowerCase().includes(this.props.val.val.toLowerCase())
        );
      });
      //  this.setState({products:products,update:false})
    } else {
      products = this.props.data.payload ? this.props.data.payload : [];
      // this.setState({products:products,update:false})
    }

    return (
      <div>
        {this.props.Authentication.user ? (
          this.props.Authentication.user.role === "admin" ? (
            // <Link
            // style={{
            //   cursor: "pointer",
            //   marginLeft: "120px",
            //   marginTop: "20px"
            // }}
            //   to="/new_product"
            // >
            <div className="add_product_btn_head">
              <Button
                color="primary"
                variant="contained"
                onClick={this.showModal}
              >
                Add Products
              </Button>
            </div>
          ) : // <Modal/>
          // </Link>
          null
        ) : null}
        <Modal visible={this.state.visible} click={this.clickHandle} />
        {/* <CustomizedSwitches /> */}
        <div className="cat_caro">
          <div className="kids">
            <KidsCat />
          </div>
          <div className="carousell">
            <DemoCarousel />
          </div>
        </div>
        <span className="kitchen_heading">Shop for Kitchen</span>

        {/* <KitchenCats/> */}
        <div className="cat_cards">
          <CatSlider products={sliderProducts} />
        </div>
        <div className="fullWidth">
          <FullWidthGrid products={products} />
        </div>
        <div className="upto70">
          <Upto70 />
        </div>
        <div className="computing_shop">
          <ComputingShop products={products} />
        </div>
        <div className="upto50">
          <Upto50 />
        </div>
        <div className="fashion">
          <Fashion products={products} />
        </div>
        <div className="upto80">
          <Upto80 />
        </div>
        <div className="brand_heading_head">
          <span className="brand_heading">SHOP BY BRANDS</span>
        </div>

        <div className="brands" style={{ marginTop: "20px" }}>
          <BrandSlider products={sliderProducts} />
        </div>
        {/* <div className="appliances">
          <Appliances />
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = store => ({
  Authentication: store.Authentication,
  data: store.ProductReducer,
  val: store.filterProductReducer
});
export default connect(mapStateToProps)(Home);
