import bagIcon from "../../assets/images/shopping-bag.png";
import "./shopping-bag.style.css";

const ShoppingBagIcon = ({ cartValue, setCart }) => {
  return (
    <div className="bag-icon_container" onClick={setCart}>
      <img width="30" src={bagIcon} alt="shopping-bag-icon" />
      {cartValue > 0 ? <span className="cart-value">{cartValue}</span> : null}
    </div>
  );
};
export default ShoppingBagIcon;
