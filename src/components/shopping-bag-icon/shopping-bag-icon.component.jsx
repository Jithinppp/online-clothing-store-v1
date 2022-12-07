import { useDispatch, useSelector } from "react-redux";

// redux
import { toggleCart } from "../../store/cart/cart.action";
// components
import {
  BagIconContainer,
  CartValue,
  ShoppingBagImage,
} from "./shopping-bag.style";
import bagIcon from "../../assets/images/shopping-bag.png";
import {
  selectCartCount,
  selectCartDropdown,
} from "../../store/cart/cart.selector";

const ShoppingBagIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartDropdown);

  const toggleCartHandler = () => dispatch(toggleCart(!isCartOpen));

  return (
    <BagIconContainer onClick={toggleCartHandler}>
      <ShoppingBagImage width="30" src={bagIcon} alt="shopping-bag-icon" />
      {cartCount > 0 ? <CartValue>{cartCount}</CartValue> : null}
    </BagIconContainer>
  );
};
export default ShoppingBagIcon;
