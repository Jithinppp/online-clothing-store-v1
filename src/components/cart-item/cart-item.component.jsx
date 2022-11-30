import "./cart-item.style.css";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item_container">
      <img src={imageUrl} className="cart-item_image" alt={name} />
      <div className="quantity_price_container">
        <span className="cart-item_name">{name}</span>
        <span className="cart-item_quantity_price">
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
};
export default CartItem;
