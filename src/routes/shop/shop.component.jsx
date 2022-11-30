import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

import "./shop.style.css";
import ProductCard from "../../components/products-card/products-card.component";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products_container">
      {products.map((data) => {
        return <ProductCard key={data.id} productData={data} />;
      })}
    </div>
  );
};
export default Shop;
