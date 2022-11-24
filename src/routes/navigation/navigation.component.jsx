import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.style.css";
import shoppingBagIcon from "../../assets/images/shopping-bag.png";

const Navigation = (props) => {
  return (
    <Fragment>
      <nav className="navigation_container">
        <h1 className="main_logo">OUTFITS</h1>
        <div className="nav_items">
          <Link className="nav_item" to="shop">
            Shop
          </Link>
          <Link className="nav_item" to="contact">
            Contact
          </Link>
          <Link className="nav_item" to="authentication">
            Sign in
          </Link>
          <Link className="nav_item">
            <img width="30" src={shoppingBagIcon} alt="shopping-cart-bag" />
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
