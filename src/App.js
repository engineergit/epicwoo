import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Home from "./components/home/home";
import NewProduct from "./components/product/new";
// import SignIn from './components/sign-in/sign_in';
import { Router, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import history from './history/history'
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Router history = {history}>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </Router>
  );
}

export default App;
