import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35vh;
`;
export const LdsRing = styled.div`
  width: 35px;
  height: 35px;
  border: 3px solid #444;
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
