import { GET_ALL_PRODUCTS, DELETE_PRODUCT } from "../actionTypes";

const initial_state = {
  isLoading: false,
  items: []
};

const productReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        payload: action.payload
      };
    case DELETE_PRODUCT:
      return {
        payload: [...state.payload.filter(i => i._id !== action.item._id)]
      };
  }
  return state;
};

export default productReducer;
