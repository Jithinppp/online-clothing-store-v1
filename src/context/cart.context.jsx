import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducers/reducer.utils";

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => {},
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  cartCount: 0,
  decrementCheckoutItem: () => {},
  removeItemFromCart: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

//helper function to add cart
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

// helper function to remove cart item
const removeCartItem = (cartItems, removableItem) => {
  const filteredItems = cartItems.filter(
    (item) => item.id !== removableItem.id
  );
  return filteredItems;
};

// decrement cart item
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

// reducers
const CART_ACTION_TYPES = {
  SET_CART_DROPDOWN: "SET_CART_DROPDOWN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  cartDropdown: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_DROPDOWN:
      return {
        ...state,
        cartDropdown: !state.cartDropdown,
      };
    default:
      throw new Error(`unhandled error ${type} in cartReducer`);
  }
};

// provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartDropdown, cartItems, cartCount, totalPrice } = state;

  // toggle cart icon dropdown functionality
  const toggleCart = () => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_DROPDOWN));
  };

  // handling update in the cart both count and add remove total of cart
  const updateCartItemReducer = (cartItems) => {
    // increment count
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    // set total
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems,
        cartCount: newCount,
        totalPrice: newTotal,
      })
    );
  };

  // add items to cart
  const addToCart = (productToCart) => {
    const newCartItem = addToCartHandler(cartItems, productToCart);
    updateCartItemReducer(newCartItem);
  };

  // delete item from cart - delete item form cart helper function
  const removeItemFromCart = (removableItem) => {
    const newCartItem = removeCartItem(cartItems, removableItem);
    updateCartItemReducer(newCartItem);
  };
  // decrement cart item
  const decrementCheckoutItem = (itemToDecrement) => {
    const newCartItem = decrementCartItem(cartItems, itemToDecrement);
    updateCartItemReducer(newCartItem);
  };

  // values to the components
  const value = {
    cartDropdown,
    cartItems,
    cartCount,
    totalPrice,
    toggleCart,
    addToCart,
    decrementCheckoutItem,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
