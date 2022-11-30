import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";

// components
import "./navigation.style.css";
import { signOutUser } from "../../utils/firebase";
import ShoppingBagIcon from "../../components/shopping-bag-icon/shopping-bag-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = (props) => {
  const { currentUser } = useContext(UserContext);
  const { cartDropdown } = useContext(CartContext);

  return (
    <Fragment>
      <nav className="navigation_container">
        <Link to="/">
          <h1 className="main_logo">OUTFITS</h1>
        </Link>
        <div className="nav_items">
          <Link className="nav_item" to="shop">
            Shop
          </Link>
          <Link className="nav_item" to="contact">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav_item" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav_item" to="authentication">
              Sign in
            </Link>
          )}
          <ShoppingBagIcon />
          {cartDropdown && <CartDropdown />}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
