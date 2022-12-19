import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutTable = styled.table`
  width: 100%;
  text-align: center;
  /* max-width: 70vw; */
  border-collapse: collapse;
  border-spacing: 0 1rem;
`;
export const CheckoutTableHead = styled.thead``;
export const CheckoutTableFoot = styled.tfoot`
  border-radius: 5px 5px 0 0;
`;
export const TableRowTitles = styled.tr`
  background-color: #5663dab3;
  color: #fff;
`;
export const TableRowPrice = styled.tr`
  border-bottom: 1px solid #5663dab3;
`;

export const CheckoutTableHeadCell = styled.th`
  font-size: 1.1rem;
  padding: 0.4rem;
  font-weight: 400;
  /* padding: 1rem 2rem; */
  @media (max-width: 550px) {
    /* padding: 0.7rem 0; */
  }
`;
