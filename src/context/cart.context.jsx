import { createContext, useEffect, useState } from "react";

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
const removeCartItem = (removableItem, cartItems) => {
  const filteredItems = cartItems.filter(
    (item) => item.id !== removableItem.id
  );
  return filteredItems;
};

// provider
const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // for count of total items
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  // useEffect for total price keep separate useEffect is best practice
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newTotal);
  }, [cartItems]);

  // toggle cart icon dropdown functionality
  const toggleCart = () => {
    setCartDropdown((prev) => !prev);
  };
  // setting or add item to cart - cartItem helper function
  const addToCart = (productToCart) => {
    setCartItems(addToCartHandler(cartItems, productToCart));
  };

  // delete item from cart - delete item form cart helper function
  const removeItemFromCart = (removableItem) => {
    setCartItems(removeCartItem(removableItem, cartItems));
  };

  const decrementCheckoutItem = (decrementItem) => {
    // map through cartItem and return a decrement item by cartItem.id == incrementItem.id
    // stop until 1
    if (decrementItem.quantity > 1) {
      setCartItems((prev) => {
        return prev.map((item) =>
          item.id === decrementItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      });
    }
  };

  // values to the components
  const value = {
    cartDropdown,
    toggleCart,
    cartItems,
    addToCart,
    cartCount,
    removeItemFromCart,
    decrementCheckoutItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
