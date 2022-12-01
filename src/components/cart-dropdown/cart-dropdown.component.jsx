import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// components
import { CartDropdownContainer, EmptyTitle } from "./cart-dropdown.style";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { LightBtnSecondaryInverted } from "../../layouts/Shared";

const CartDropdown = () => {
  const { cartItems, toggleCart } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
    toggleCart();
  };

  return (
    <CartDropdownContainer>
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      {cartItems.length ? (
        <LightBtnSecondaryInverted onClick={checkoutHandler}>
          Checkout
        </LightBtnSecondaryInverted>
      ) : (
        <EmptyTitle>your cart is empty</EmptyTitle>
      )}
    </CartDropdownContainer>
  );
};
export default CartDropdown;
