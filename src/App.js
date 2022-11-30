import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    // route make sure that url from browser keep up with Route that we provided inside
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
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
