import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CartContext } from "../../context/cart.context";

import "./checkout.style.css";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout_container">
      <table className="table">
        {/* headings */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
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
            <th>total</th>
            <th>{totalPrice}$</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Checkout;
