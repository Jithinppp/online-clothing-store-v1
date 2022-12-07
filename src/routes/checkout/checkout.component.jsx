// redux
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
// components
import {
  CheckoutContainer,
  CheckoutTable,
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
        <thead>
          <tr>
            <CheckoutTableHeadCell>Product</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>Qty</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>Price</CheckoutTableHeadCell>
          </tr>
        </thead>
        {/* contents */}
        <tbody>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} productData={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <CheckoutTableHeadCell>total</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>{totalPrice}$</CheckoutTableHeadCell>
          </tr>
        </tfoot>
      </CheckoutTable>
    </CheckoutContainer>
  );
};
export default Checkout;
