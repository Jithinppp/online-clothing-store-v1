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
  TableRowPrice,
  TableRowTitles,
} from "./checkout.style";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  // const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutTable>
        {/* headings */}
        <CheckoutTableHead>
          <TableRowTitles>
            <CheckoutTableHeadCell>Product</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>Qty</CheckoutTableHeadCell>
            <CheckoutTableHeadCell>Price</CheckoutTableHeadCell>
            <CheckoutTableHeadCell></CheckoutTableHeadCell>
          </TableRowTitles>
        </CheckoutTableHead>
        {/* contents */}
        <tbody>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} productData={item} />
          ))}
        </tbody>
        <CheckoutTableFoot>
          <TableRowPrice>
            <CheckoutTableHeadCell>Total</CheckoutTableHeadCell>
            <CheckoutTableHeadCell></CheckoutTableHeadCell>
            <CheckoutTableHeadCell>{totalPrice}₹</CheckoutTableHeadCell>
            <CheckoutTableHeadCell></CheckoutTableHeadCell>
          </TableRowPrice>
        </CheckoutTableFoot>
      </CheckoutTable>
      <PaymentForm />
    </CheckoutContainer>
  );
};
export default Checkout;
