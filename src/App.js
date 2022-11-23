import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    // route make sure that url from browser keep up with Route that we provided inside
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;

// Note: to make nested route we use Route opening and closing tag not self closing
// also use Outlet from RDM to show where the nested components should render
// inside that we provide all the route for nest
// the index property make a default page component in that particular route
