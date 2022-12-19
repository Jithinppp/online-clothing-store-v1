import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

export const PaymentFormContainer = styled.form`
  height: 100px;
  width: 350px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .StripeElement {
    margin: 1rem 0;
    font-family: inherit;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    padding: 15px 10px;
    border-radius: 5px;
  }
`;
