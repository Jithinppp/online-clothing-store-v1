import styled from "styled-components";

export const FormInputItem = styled.input`
  width: 270px;
  margin: 8px 0;
  outline: none;
  border: none;
  border-radius: 2px;
  height: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.188);
  padding: 3px;
  &::placeholder {
    opacity: 0.8;
  }
  @media (min-width: 760px) {
    width: 330px;
    margin: 16px 0;
  }
`;
