import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// utils
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase";

// components
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

//redux imports
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  // only one dispatch in redux that make all dispatch
  const dispatch = useDispatch();
  // check user is logged in or not on initial mounting
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // if the user exist store in firestore
        createUserDocumentFromAuth(user);
      }
      // now we centralized out auth {type:"user-action-type",payload:user}
      dispatch(setCurrentUser(user));
    });
    // running on unmount of the component
    return unsubscribe;
  }, []);

  return (
    // route make sure that url from browser keep up with Route that we provided inside
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;

// Note: to make nested route we use Route opening and closing tag not self closing
// also use Outlet from RDM to show where the nested components should render
// inside that we provide all the route for nest
// the index property make a default page component in that particular route
// the path="shop/*" asterisk means whatever the route shop/anything it will render the shop component
// then we can handle that route in the shop route or shop component
