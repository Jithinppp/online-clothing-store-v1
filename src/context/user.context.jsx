import { createContext, useState } from "react";

// 1.create a context first with createContext and give all the initial values
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// then create a provider for the context as a component that is a higher order component
// which renders all the children because we wrap App init therefor a children prop there having all the children
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
