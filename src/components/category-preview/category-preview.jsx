import "./category-preview.style.css";
import ProductCard from "../products-card/products-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, product }) => {
  return (
    <div>
      <Link to={title}>
        <h3 className="shop_title">{title}</h3>
      </Link>
      <div className="products_container">
        {product
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} productData={item} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
