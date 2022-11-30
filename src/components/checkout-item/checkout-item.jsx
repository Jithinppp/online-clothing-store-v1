import "./checkout-item.style.css";
import { BiX, BiPlus, BiMinus } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ productData }) => {
  const { name, imageUrl, price, quantity } = productData;
  const { removeItemFromCart, addToCart, decrementCheckoutItem } =
    useContext(CartContext);

  return (
    <tr>
      <td>
        <div className="product_description">
          <img
            src={imageUrl}
            width={70}
            height={70}
            alt={name}
            className="product_img"
          />
          <span className="product_name">{name}</span>
        </div>
      </td>
      <td>
        <div className="center_table-data">
          {/* on click decrement checkout item */}
          {<BiMinus onClick={() => decrementCheckoutItem(productData)} />}
          {quantity}
          {/* onclick increment checkout item */}
          {<BiPlus onClick={() => addToCart(productData)} />}
        </div>
      </td>
      <td>
        <div className="center_table-data">{price}$</div>
      </td>
      <td className="remove_checkout_item">
        <div className="center_table-data">
          {<BiX onClick={() => removeItemFromCart(productData)} />}
        </div>
      </td>
    </tr>
  );
};
export default CheckoutItem;
