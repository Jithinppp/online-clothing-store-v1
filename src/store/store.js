import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

// config for persist blacklist is array of values that make no persist values inside them
// here we don't want user to be persisted it comes from authStateChanged
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
// make a common reducer with persistReducer and give that to crateStore
// now persistedReducer act as rootReducer for the createStore
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// creating redux store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// after creating/instantiate the store run the saga-middleware by run method with root-saga
sagaMiddleware.run(rootSaga);

// persistor for the persistGate wrapper
export const persistor = persistStore(store);
