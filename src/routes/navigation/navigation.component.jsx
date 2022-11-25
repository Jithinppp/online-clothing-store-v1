import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";

// components
import "./navigation.style.css";
import shoppingBagIcon from "../../assets/images/shopping-bag.png";
import { signOutUser } from "../../utils/firebase";

const Navigation = (props) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // sign-out handler
  const signOutHandler = async () => {
    await signOutUser();
    // after sign-out set the current user null
    setCurrentUser(null);
  };
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
          {currentUser ? (
            <span className="nav_item" onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className="nav_item" to="authentication">
              Sign in
            </Link>
          )}
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
