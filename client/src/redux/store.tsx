import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThunk];
export const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middlewares)
)(createStore);
export const store = createStoreWithMiddleware(RootReducer);
