import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// redux
import { selectCategoriesMap } from "../../store/categories/categories.selector";
// components
import { CategoryTitle, ProductsContainer } from "./category.style";
import ProductCard from "../../components/products-card/products-card.component";

const Category = () => {
  console.log("render-rerender in categories components");

  const categories = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    console.log("useEffect called from setProduct ");

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
