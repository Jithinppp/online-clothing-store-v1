import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";

// components
import {
  NavigationContainer,
  MainLogo,
  NavItems,
  NavItem,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase";
import ShoppingBagIcon from "../../components/shopping-bag-icon/shopping-bag-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = (props) => {
  const { currentUser } = useContext(UserContext);
  const { cartDropdown } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <Link to="/">
          <MainLogo>OUTFITS</MainLogo>
        </Link>
        <NavItems>
          <NavItem to="shop">Shop</NavItem>
          <NavItem to="contact">Contact</NavItem>
          {currentUser ? (
            <NavItem onClick={signOutUser}>Sign out</NavItem>
          ) : (
            <NavItem to="authentication">Sign in</NavItem>
          )}
          <ShoppingBagIcon />
          {cartDropdown && <CartDropdown />}
        </NavItems>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
