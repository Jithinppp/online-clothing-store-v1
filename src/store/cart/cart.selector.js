import { createSelector } from "reselect";

// this will points to the rootReducer object
const selectCartReducer = (state) => state.cart;

// this will points to the actual value inside the state (cartItems)
export const selectCartItems = createSelector(
  // here based on above selectCartReducer we get the state values(cartItems) from the cb function
  [selectCartReducer],
  // cb function
  (cart) => cart.cartItems
);

// this will points to the actual value inside the state (cartDropDown)
export const selectCartDropdown = createSelector(
  // here based on above selectCartReducer we get the state values(cartDropDown) from the cb function
  [selectCartReducer],
  (cart) => cart.cartDropdown
);

// this will points to the actual value inside the state (cartCount)
export const selectCartCount = createSelector(
  // here based on the selectCartItems we make cartCount and return a single value
  [selectCartItems],
  // the cb have cartItems based on the cartItems we calculate the count
  (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
);

// this will points to the actual value inside the state (cartTotal)
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    // the cb have cartItems based on the cartItems we calculate the total
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
  }
);
