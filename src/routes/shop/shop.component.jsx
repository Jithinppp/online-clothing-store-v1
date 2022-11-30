import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";

import "./shop.style.css";
import ProductCard from "../../components/products-card/products-card.component";
const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => (
        <div key={title}>
          <h3 className="shop_title">{title}</h3>
          <div className="products_container">
            {categories[title].map((data) => {
              return <ProductCard key={data.id} productData={data} />;
            })}
          </div>
        </div>
      ))}
    </Fragment>
  );
};
export default Shop;
