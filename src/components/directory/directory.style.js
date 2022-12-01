import styled from "styled-components";

export const DirectoryContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
