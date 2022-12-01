import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 90%;
  padding-bottom: 10px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  border-radius: 2px;
`;
export const ProductCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;
export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0 10px;
  letter-spacing: -1px;
`;
export const ButtonPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 1rem 0;
`;
export const ProductPrice = styled.span`
  font-size: 1.3rem;
`;
