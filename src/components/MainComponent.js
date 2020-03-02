import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import AdminChat from "./AdminChat";
import Home from "./home/home";
import AdminRoutes from "./AdminRoutes";
import ProductDetail from "./ProductDetail";
import MasterHeader from "./master-header/masterHeader";
import UserChat from "./UserChat";
import InfoHeader from "./info-header/infoHeader";
import { verifyToken } from "../shared";
import { loginSuccess } from "../Redux/actions/authentication";
import ProductActionCreator from "../Redux/epics/product";
// import NewProduct from '../components/product/new';
import CatHeader from "./cat-header/cat_header";
// import history from '../history/history'
import CatRoutes from './CatRoutes/index'


class Main extends React.Component {




  
  state = {
    val:true
  }


  componentDidMount() {
    fetch("/products/get_all_products", {})
      .then(resp => {
        return resp.json();
      })
      .then(res => {
        this.props.dispatch(ProductActionCreator.GetAll(res));
      });
    const user = verifyToken();
    if (user) {
      this.props.dispatch(dis => dis(loginSuccess(user)));
    }
  }
  checkCat = (val)=>{
    this.setState({val:val})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div className="infoHead">
          <InfoHeader />
        </div>
        <MasterHeader />
        
        <div className="cat_Head">
          <CatHeader cat = {this.checkCat} catAvail = {this.state.val}/>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <AdminRoutes path="/inbox" component={AdminChat} />
          <ProductDetail path="/productDetail/:id" component={ProductDetail} />
          <CatRoutes/>
        </Switch>
        {this.props.Authentication.user &&
          this.props.Authentication.user.role === "user" && (
            <UserChat
              user={this.props.Authentication.user}
              token={localStorage.getItem("token")}
            />
          )}
      </div>
    );
  }
}
const mapStateToProps = store => ({
  Authentication: store.Authentication
});
export default connect(mapStateToProps)(Main);
