import styled from "styled-components";

export const CheckoutContainer = styled.div``;

export const CheckoutTable = styled.table`
  width: 100%;
  text-align: center;
`;
export const CheckoutTableHead = styled.thead`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 5px 5px 0 0;
`;
export const CheckoutTableFoot = styled.tfoot`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 5px 5px 0 0;
`;

export const CheckoutTableHeadCell = styled.th`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 2rem;
  @media (max-width: 550px) {
    padding: 0.7rem 0;
  }
`;
