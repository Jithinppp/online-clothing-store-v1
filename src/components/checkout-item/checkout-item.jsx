import { useContext } from "react";

// components
import { BiX, BiPlus, BiMinus } from "react-icons/bi";
import { CartContext } from "../../context/cart.context";
import {
  CenterTableData,
  ProductDescription,
  ProductImage,
  ProductName,
  TableData,
} from "./checkout-item.style";

const CheckoutItem = ({ productData }) => {
  const { name, imageUrl, price, quantity } = productData;
  const { removeItemFromCart, addToCart, decrementCheckoutItem } =
    useContext(CartContext);

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
          {<BiMinus onClick={() => decrementCheckoutItem(productData)} />}
          {quantity}
          {/* onclick increment checkout item */}
          {<BiPlus onClick={() => addToCart(productData)} />}
        </CenterTableData>
      </TableData>
      <TableData>
        <CenterTableData>{price}$</CenterTableData>
      </TableData>
      <TableData>
        <CenterTableData>
          {<BiX onClick={() => removeItemFromCart(productData)} />}
        </CenterTableData>
      </TableData>
    </tr>
  );
};
export default CheckoutItem;
