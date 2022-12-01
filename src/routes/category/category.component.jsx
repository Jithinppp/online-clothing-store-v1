import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import { CategoryTitle, ProductsContainer } from "./category.style";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/products-card/products-card.component";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <ProductsContainer>
        {products &&
          products.map((item) => (
            <ProductCard productData={item} key={item.id} />
          ))}
      </ProductsContainer>
    </Fragment>
  );
};
export default Category;
