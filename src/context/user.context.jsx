import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import { createAction } from "../utils/reducers/reducer.utils";

// 1.create a context first with createContext and give all the initial values
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Reducers
const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
// initial state
const INITIAL_STATE = {
  currentUser: null,
};
// reducer function
const userReducer = (state, action) => {
  console.log("dispatched");
  // state is the prev state and action contains type and payload
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error("unhandled error occurred in userReducer");
  }
};

// then create a provider for the context as a component that is a higher order component
// which renders all the children because we wrap App init therefor a children prop there having all the children
const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser);

  // re define the setCurrentUser { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user }
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // if the user exist store in firestore
        createUserDocumentFromAuth(user);
      }
      // now we centralized out auth
      setCurrentUser(user);
    });
    // running on unmount of the component
    return unsubscribe;
  }, []);

  const value = { setCurrentUser, currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
