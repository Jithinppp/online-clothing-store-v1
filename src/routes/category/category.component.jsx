import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/products-card/products-card.component";
import { CategoriesContext } from "../../context/categories.context";
import "./category.style.css";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);
  return (
    <Fragment>
      <h3 className="shop_title">{category}</h3>
      <div className="products_container">
        {products &&
          products.map((item) => (
            <ProductCard productData={item} key={item.id} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
