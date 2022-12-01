import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  justify-items: center;
  gap: 1.5rem;
`;
export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  color: inherit;
`;
