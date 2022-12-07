import { useDispatch, useSelector } from "react-redux";

// redux
import {
  addToCart,
  decrementCheckoutItem,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

// components
import { BiX, BiPlus, BiMinus } from "react-icons/bi";
import {
  CenterTableData,
  ProductDescription,
  ProductImage,
  ProductName,
  TableData,
} from "./checkout-item.style";

const CheckoutItem = ({ productData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = productData;

  const decrementCheckoutItemHandler = () =>
    dispatch(decrementCheckoutItem(cartItems, productData));
  const addToCartHandler = () => dispatch(addToCart(cartItems, productData));
  const removeItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, productData));

  return (
    <tr>
      <TableData>
        <ProductDescription>
          <ProductImage src={imageUrl} width={70} height={70} alt={name} />
          <ProductName>{name}</ProductName>
        </ProductDescription>
      </TableData>
      <TableData>
        <CenterTableData>
          {/* on click decrement checkout item */}
          {<BiMinus onClick={decrementCheckoutItemHandler} />}
          {quantity}
          {/* onclick increment checkout item */}
          {<BiPlus onClick={addToCartHandler} />}
        </CenterTableData>
      </TableData>
      <TableData>
        <CenterTableData>{price}$</CenterTableData>
      </TableData>
      <TableData>
        <CenterTableData>
          {/* on click remove item  */}
          {<BiX onClick={removeItemFromCartHandler} />}
        </CenterTableData>
      </TableData>
    </tr>
  );
};
export default CheckoutItem;
