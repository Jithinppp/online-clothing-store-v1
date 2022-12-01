import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #9d9d9d53;
  padding: 1rem;
  border-radius: 3px;
  right: 1rem;
  bottom: 0;
  width: 250px;
  height: 300px;
  z-index: 100;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transform: translateY(105%);
  overflow-y: scroll;
  @media (min-width: 550px) {
    width: 300px;
    height: 400px;
  }
`;
export const EmptyTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
