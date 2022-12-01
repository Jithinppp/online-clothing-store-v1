import { useContext } from "react";

// components
import {
  CheckoutContainer,
  CheckoutTable,
  CheckoutTableHeadCell,
} from "./checkout.style";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
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
