// components
import {
  CartItemContainer,
  CartItemImage,
  QuantityPriceContainer,
  CartItemName,
  CartItemQuantityPrice,
} from "./cart-item.style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <QuantityPriceContainer>
        <CartItemName>{name}</CartItemName>
        <CartItemQuantityPrice>
          {quantity} x {price}₹
        </CartItemQuantityPrice>
      </QuantityPriceContainer>
    </CartItemContainer>
  );
};
export default CartItem;
