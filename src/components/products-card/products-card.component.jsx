import { useContext } from "react";

// components
import {
  ProductCardContainer,
  ProductCardImage,
  ProductTitle,
  ButtonPriceContainer,
  ProductPrice,
} from "./products-card.style.js";
import { LightBtnSecondary } from "../../layouts/Shared.js";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ productData }) => {
  const { name, imageUrl, price } = productData;
  const { addToCart } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />
      <ProductTitle>{name}</ProductTitle>
      <ButtonPriceContainer>
        <ProductPrice>{price}$</ProductPrice>
        <LightBtnSecondary onClick={() => addToCart(productData)}>
          Add to cart
        </LightBtnSecondary>
      </ButtonPriceContainer>
    </ProductCardContainer>
  );
};
export default ProductCard;
