import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux
import { selectUser } from "../../store/user/user.selector";
import { selectCartDropdown } from "../../store/cart/cart.selector";
// components
import {
  NavigationContainer,
  MainLogo,
  NavItems,
  NavItem,
} from "./navigation.styles";
// import { signOutUser } from "../../utils/firebase";
import ShoppingBagIcon from "../../components/shopping-bag-icon/shopping-bag-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutStart } from "../../store/user/user.action";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const cartDropdown = useSelector(selectCartDropdown);
  // getting data from redux we pass a selector function for each items
  const currentUser = useSelector(selectUser);
  const signOutUser = () => dispatch(signOutStart());

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
