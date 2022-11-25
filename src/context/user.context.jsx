import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase";

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

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // if the user exist store in firestore
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      // now we centralized out auth
      setCurrentUser(user);
    });
    // running on unmount of the component
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
