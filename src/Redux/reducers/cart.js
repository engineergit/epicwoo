import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  SEND_ORDER
} from "../actionTypes";
const Cart = (
  state = {
    cart: []
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isFound = false;
      const items = state.cart.map(p => {
        if (p.id === action.item.id) {
          isFound = true;
          ++p.quantity;
          return p;
        }
        return p;
      });
      if (!isFound) {
        action.item.quantity = 1;
        return { cart: [...state.cart, action.item] };
      } else {
        return { cart: [...items] };
      }
    case REMOVE_FROM_CART:
      return { cart: [...state.cart.filter(p => p.id !== action.item.id)] };
    case UPDATE_QUANTITY:
      return {
        cart: [
          ...state.cart.map(p => {
            if (p.id === action.item.id) {
              p.quantity = action.quantity;
            }
            return p;
          })
        ]
      };
    case SEND_ORDER:
      return { cart: [] };
    default:
      return state;
  }
};

export default Cart;
