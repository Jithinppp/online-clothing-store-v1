import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin: 5px 0;
  padding: 0 0.3rem;
`;

export const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const QuantityPriceContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const CartItemName = styled.span`
  font-size: 1.1rem;
`;

export const CartItemQuantityPrice = styled.span`
  font-weight: 500;
`;

/* .cart-item_container {
  display: flex;
  align-items: center;
  height: 60px;
  margin: 5px 0;
  padding: 0 0.3rem;
}
.cart-item_image {
  width: 50px;
  height: 50px;
}
.cart-item_name {
  font-size: 1.1rem;
}
.cart-item_quantity_price {
  font-weight: 500;
}
.quantity_price_container {
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
} */
