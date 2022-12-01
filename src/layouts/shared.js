import styled from "styled-components";

// titles
export const MainTitle = styled.h1`
  font-weight: 400;
  letter-spacing: -1px;
  font-size: 1.8rem;
  margin: 0;
`;

export const LightSubtitle = styled.p`
  margin: 7px 0;
  opacity: 0.7;
  font-weight: 300;
`;

// buttons
export const LightBtnPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 270px;
  margin: 15px 0;
  background-color: #fff;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.1s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }
  & svg {
    height: 18px;
    margin: 0 10px;
  }
  @media (min-width: 760px) {
    width: 330px;
  }
`;

export const DarkBtnPrimary = styled.button`
  margin: 1rem 0;
  width: 270px;
  color: #fff;
  background-color: rgb(19, 19, 19);
  outline: none;
  border: none;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }
  @media (min-width: 760px) {
    width: 330px;
  }
`;

export const LightBtnSecondary = styled.button`
  outline: none;
  border: none;
  padding: 3px 8px;
  border-radius: 2px;
  cursor: pointer;
  background-color: #fff;
  border: 2px solid #000;
  &:hover {
    background-color: #f0eeee;
  }
`;
