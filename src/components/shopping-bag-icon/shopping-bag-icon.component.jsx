import { useContext } from "react";
import bagIcon from "../../assets/images/shopping-bag.png";
import { CartContext } from "../../context/cart.context";
import "./shopping-bag.style.css";

const ShoppingBagIcon = () => {
  const { cartCount, toggleCart } = useContext(CartContext);
  return (
    <div className="bag-icon_container" onClick={toggleCart}>
      <img width="30" src={bagIcon} alt="shopping-bag-icon" />
      {cartCount > 0 ? <span className="cart-value">{cartCount}</span> : null}
    </div>
  );
};
export default ShoppingBagIcon;
