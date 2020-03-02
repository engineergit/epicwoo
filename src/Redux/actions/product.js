import { GET_ALL_PRODUCTS, GET_VAL, DELETE_PRODUCT } from "../actionTypes";

export const get_all = data => ({
  type: GET_ALL_PRODUCTS,
  payload: data
});

export const get_search_val = val => ({
  type: GET_VAL,
  val: val
});

export const deleteProduct = item=>({
  type:DELETE_PRODUCT,
  item
})