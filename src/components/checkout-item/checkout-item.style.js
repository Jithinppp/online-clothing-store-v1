import styled from "styled-components";

export const TableData = styled.td`
  /* td */
  font-weight: 300;
  padding: 1rem 2rem;
  vertical-align: middle;
  @media (max-width: 630px) {
    padding: 0.5rem;
  }
  @media (max-width: 440px) {
    padding: 5px;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
`;

export const ProductName = styled.span`
  margin: 0 5px;
  font-size: 1rem;
  text-align: left;
`;

export const CenterTableData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    background-color: #1818180a;
    margin: 0 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 10px;
    color: #7c7c7c;
    @media (max-width: 440px) {
      margin: 0 5px;
      font-size: 1rem;
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
