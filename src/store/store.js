import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

// custom middleware
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);
//   console.log("next state:", store.getState());
// };
const middleware = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

// config for persist blacklist is array of values that make no persist values inside them
// here we don't want user to be persisted it comes from authStateChanged
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// make a common reducer with persistReducer and give that to crateStore
// now persistedReducer act as rootReducer for the createStore
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating redux store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// persistor for the persistGate wrapper
export const persistor = persistStore(store);