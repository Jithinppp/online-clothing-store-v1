import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { ButtonSecondary } from "../../layouts/utility/util.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.css";

const CartDropdown = () => {
  const { cartItems, toggleCart } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
    toggleCart();
  };

  return (
    <div className="cart-dropdown_container">
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
      {cartItems.length ? (
        <ButtonSecondary content={"checkout"} onClick={checkoutHandler} />
      ) : (
        <p className="empty_title">your cart is empty</p>
      )}
    </div>
  );
};
export default CartDropdown;
