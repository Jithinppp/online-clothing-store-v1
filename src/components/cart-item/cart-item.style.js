import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin: 5px 0;
  padding: 0 0.3rem;
`;

export const CartItemImage = styled.img`
  height: 50px;
  width: 50px;
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
  font-size: 0.8rem;
  color: #4448;
`;
