import { createStore, combineReducers, applyMiddleware } from "redux";
import Authentication from "./reducers/authentication";
import Cart from "./reducers/cart";
import ProductReducer from './reducers/product'
import thunk from "redux-thunk";
import filterProductReducer from './reducers/filterProduct';



let store = createStore(
  combineReducers({ Authentication, Cart,ProductReducer,filterProductReducer }),
  applyMiddleware(thunk)
);

export default store;
