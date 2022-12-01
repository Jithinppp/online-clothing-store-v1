import styled from "styled-components";

export const TableData = styled.td`
  /* td */
  padding: 1rem 2rem;
  vertical-align: middle;
  @media (max-width: 630px) {
    padding: 0.5rem;
  }
  @media (max-width: 440px) {
    padding: 0;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  background-size: cover;
  background-position: center;
`;

export const ProductName = styled.div`
  margin: 0 1rem;
  font-size: 1.2rem;
  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const CenterTableData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin: 0 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    opacity: 0.6;
    @media (max-width: 440px) {
      margin: 0 5px;
      font-size: 1.3rem;
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;

/* td {
 
}
.center_table-data {
  
}
.center_table-data svg {
  
}

.product_description {
  
}
.product_name {
  
}

@media screen and (max-width: 630px) {
  td {
    
  }
}

@media screen and (max-width: 440px) {
  .center_table-data svg {
    
  }
  td {
    
  }
}


@media screen and (max-width: 550px) {
  th {
    padding: 0;
  }
  .product_name {
    font-size: 1rem;
  }
} */
