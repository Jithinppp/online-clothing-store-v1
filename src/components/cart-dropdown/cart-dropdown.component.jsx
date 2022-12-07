import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux
import {
  selectCartDropdown,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { toggleCart } from "../../store/cart/cart.action";

// components
import { CartDropdownContainer, EmptyTitle } from "./cart-dropdown.style";
import { LightBtnSecondaryInverted } from "../../layouts/shared/Shared.js";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartDropdown = useSelector(selectCartDropdown);

  const checkoutNavigateHandler = () => {
    navigate("/checkout");
    dispatch(toggleCart(!cartDropdown));
  };

  return (
    <CartDropdownContainer>
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      {cartItems.length ? (
        <LightBtnSecondaryInverted onClick={checkoutNavigateHandler}>
          Checkout
        </LightBtnSecondaryInverted>
      ) : (
        <EmptyTitle>your cart is empty</EmptyTitle>
      )}
    </CartDropdownContainer>
  );
};
export default CartDropdown;
