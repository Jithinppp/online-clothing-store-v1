import styled from "styled-components";

export const ButtonContainer = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
  width: 200px;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const LoaderSpinnerContainer = styled.span`
  width: 15px;
  height: 15px;
  border: 2px solid #444;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const MainButtonText = styled.span`
  margin: 0 10px;
`;
