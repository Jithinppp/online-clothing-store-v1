import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// redux
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/categories.selector";
// components
import { CategoryTitle, ProductsContainer } from "./category.style";
import ProductCard from "../../components/products-card/products-card.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const Category = () => {
  const isLoading = useSelector(selectIsCategoriesLoading);
  const categories = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductsContainer>
          {products &&
            products.map((item) => (
              <ProductCard productData={item} key={item.id} />
            ))}
        </ProductsContainer>
      )}
    </Fragment>
  );
};
export default Category;
