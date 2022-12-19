import { useDispatch, useSelector } from "react-redux";

// redux
import { addToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
// components
import {
  ProductCardContainer,
  ProductCardImage,
  ProductTitle,
  ButtonPriceContainer,
  ProductPrice,
} from "./products-card.style.js";
import { LightBtnSecondary } from "../../layouts/shared/Shared.js";

const ProductCard = ({ productData }) => {
  const { name, imageUrl, price } = productData;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemToCartHandler = () =>
    dispatch(addToCart(cartItems, productData));

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />
      <ProductTitle>{name}</ProductTitle>
      <ButtonPriceContainer>
        <ProductPrice>{price}₹</ProductPrice>
        <LightBtnSecondary onClick={addItemToCartHandler}>
          Add to cart
        </LightBtnSecondary>
      </ButtonPriceContainer>
    </ProductCardContainer>
  );
};
export default ProductCard;
