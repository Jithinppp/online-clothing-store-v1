import styled from "styled-components";

export const SignContainer = styled.main`
  display: grid;
  margin-top: 3rem;
  gap: 1rem;
  transition: 0.1s ease;
  @media (min-width: 600px) {
    margin-top: 0;
    grid-template-columns: repeat(2, 1fr);
    transition: 0.1s ease;
  }
`;
