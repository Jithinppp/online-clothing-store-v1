// redux
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
// components
import {
  CheckoutContainer,
  CheckoutTable,
  CheckoutTableFoot,
  CheckoutTableHead,
  CheckoutTableHeadCell,
} from "./checkout.style";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  // const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutTable>
        {/* headings */}
        <CheckoutTableHead>
          <tr>
            <CheckoutTableHeadCell>Product</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>Qty</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>Price</CheckoutTableHeadCell>
          </tr>
        </CheckoutTableHead>
        {/* contents */}
        <tbody>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} productData={item} />
          ))}
        </tbody>
        <CheckoutTableFoot>
          <tr>
            <CheckoutTableHeadCell>Total</CheckoutTableHeadCell>
            <CheckoutTableHeadCell></CheckoutTableHeadCell>
            <CheckoutTableHeadCell>{totalPrice}$</CheckoutTableHeadCell>
          </tr>
        </CheckoutTableFoot>
      </CheckoutTable>
    </CheckoutContainer>
  );
};
export default Checkout;
