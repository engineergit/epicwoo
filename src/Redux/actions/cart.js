import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, SEND_ORDER } from "../actionTypes";

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  item
});

export const updateQuantity = (item, quantity) => ({
  type: UPDATE_QUANTITY,
  item,
  quantity
});

export const sendOrder = ()=>({
  type:SEND_ORDER
})