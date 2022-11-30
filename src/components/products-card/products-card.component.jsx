import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ButtonSecondary } from "../../layouts/utility/util.component";
import "./products-card.style.css";

const ProductCard = ({ productData }) => {
  const { name, imageUrl, price } = productData;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card_container">
      <img src={imageUrl} alt={name} className="product-card_image" />
      <h3 className="product_title">{name}</h3>
      <div className="button-price_container">
        <span className="product_price">{price}$</span>
        <ButtonSecondary
          content={"Add to cart"}
          onClick={() => addToCart(productData)}
        />
      </div>
    </div>
  );
};
export default ProductCard;
