import React from "react";
import ImageMagnifier from "react-image-magnify";
import { Products } from "../../shared";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/cart";
import {baseUrl} from '../../shared'

class ProductDetail extends React.Component {
  state = {
    item: null
  };

  componentDidMount() {
    this.props.products.payload &&
      this.setState({
        item: this.props.products.payload.find(
          item => item._id === this.props.computedMatch.params.id
        )
      });
  }
  addItemToCart = item => () => {
    this.props.dispatch(dis => dis(addToCart(item)));
  };
  render() {
    return (
      <div
        style={{
          marginTop: "50px",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {this.state.item && (
          <div style={{ display: "flex" }}>
            <ImageMagnifier
              isHintEnabled={true}
              {...{
                smallImage: {
                  alt: this.state.item.title,
                  width: 400,
                  height: 400,
                  src: baseUrl+ this.state.item.imgSrc
                },
                largeImage: {
                  width: 800,
                  height: 800,
                  src:baseUrl+ this.state.item.imgSrc
                }
              }}
            />
            <div className="card_div">
              <div className="product_info">
                <div className="product_price_desc_div">
                  <div className="desc_div_1">{this.state.item.title}</div>
                  <div className="price_div_1">
                    Rs : {this.state.item.price}
                  </div>
                  <div>
                    <button
                      class=" button1"
                      onClick={this.addItemToCart(this.state.item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
              <div className="about_products_info">
                <ul>
                  <li className="about_product">+ Cash On Delivery</li>
                  <li className="about_product">+ 3 Days Return Policy</li>
                  <li className="about_product">
                    + Flat Rate (All over Pakistan) Rs:150
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = store => ({
  products: store.ProductReducer
});
export default connect(mapStateToProps)(ProductDetail);
