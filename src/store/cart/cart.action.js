import { createAction } from "../../utils/reducers/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

// add to cart helper function
const addToCartHandler = (cartItems, productToCart) => {
  //check if the item exist in the cart and set a flag
  const existingCartItem = cartItems.find(
    (item) => item.id === productToCart.id
  );
  // if exist return a new array with existing and quantity incremented
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // if none of the item in the cart simply spread existing and add quantity field with 1
  return [...cartItems, { ...productToCart, quantity: 1 }];
};

// decrement cart item helper function
const decrementCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// remove cart item helper function
const removeCartItem = (cartItems, removableItem) => {
  const filteredItems = cartItems.filter(
    (item) => item.id !== removableItem.id
  );
  return filteredItems;
};

// actual cart action functions

// toggle cartDropdown
export const toggleCart = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_DROPDOWN, boolean);

// add items to cart
export const addToCart = (cartItems, productToCart) => {
  const newCartItem = addToCartHandler(cartItems, productToCart);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
};

// decrement cart item
export const decrementCheckoutItem = (cartItems, itemToDecrement) => {
  const newCartItem = decrementCartItem(cartItems, itemToDecrement);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
};

// delete item from cart - delete item form cart helper function
export const removeItemFromCart = (cartItems, removableItem) => {
  const newCartItem = removeCartItem(cartItems, removableItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
};
