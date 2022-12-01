import { useContext } from "react";

// components
import {
  BagIconContainer,
  CartValue,
  ShoppingBagImage,
} from "./shopping-bag.style";
import bagIcon from "../../assets/images/shopping-bag.png";
import { CartContext } from "../../context/cart.context";

const ShoppingBagIcon = () => {
  const { cartCount, toggleCart } = useContext(CartContext);
  return (
    <BagIconContainer onClick={toggleCart}>
      <ShoppingBagImage width="30" src={bagIcon} alt="shopping-bag-icon" />
      {cartCount > 0 ? <CartValue>{cartCount}</CartValue> : null}
    </BagIconContainer>
  );
};
export default ShoppingBagIcon;
