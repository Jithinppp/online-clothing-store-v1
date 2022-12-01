import { Fragment } from "react";
import { Link } from "react-router-dom";

// components
import { ShopTitle, ProductsContainer } from "./category-preview.style.js";
import ProductCard from "../products-card/products-card.component";

const CategoryPreview = ({ title, product }) => {
  return (
    <Fragment>
      <Link to={title}>
        <ShopTitle>{title}</ShopTitle>
      </Link>
      <ProductsContainer>
        {product
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} productData={item} />
          ))}
      </ProductsContainer>
    </Fragment>
  );
};
export default CategoryPreview;
