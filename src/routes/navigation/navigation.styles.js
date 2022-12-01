import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.1s ease;
  position: relative;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const MainLogo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const NavItems = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.1s ease;
  @media (max-width: 550px) {
    margin-top: 10px;
  }
`;

export const NavItem = styled(Link)`
  margin: 0 1.5rem;
  font-size: 1.1rem;
  font-weight: 400;
  transition: 0.1s ease;
  cursor: pointer;
  @media (max-width: 450px) {
    margin: 0 15px;
  }
`;
