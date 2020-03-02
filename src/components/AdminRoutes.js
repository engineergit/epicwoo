import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoutes = props => {
  console.log(props);
  if (props.Authentication.user && props.Authentication.user.role === "admin") {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};
const mapStateToProps = store => ({
  Authentication: store.Authentication
});
export default connect(mapStateToProps)(AdminRoutes);
