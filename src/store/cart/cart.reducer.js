import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartDropdown: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_DROPDOWN:
      return {
        ...state,
        cartDropdown: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
