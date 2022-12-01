import styled from "styled-components";

export const CategoryContainer = styled.div`
  min-height: 160px;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  grid-column: ${({ catId }) => (catId === 2 ? "2 / -1" : "")};
  grid-row: ${({ catId }) => (catId === 2 ? "1 / span 2" : "")};
  object-fit: cover;
  background-position: 0 30%;
  &:hover {
    transform: scale(1.01);
  }
`;

export const CategoryTitleContainer = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.051)
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0 10px;
  color: #fff;
  letter-spacing: 1px;
`;

export const CategorySubTitle = styled.p`
  margin: 0 10px 10px;
  color: #fff;
  font-weight: 200;
`;
