import styled from "styled-components";

export const BagIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
export const ShoppingBagImage = styled.img`
  object-fit: cover;
`;

export const CartValue = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: 700;
`;
