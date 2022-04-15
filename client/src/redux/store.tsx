import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThunk];
export const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middlewares)
)(createStore);
export const store = createStoreWithMiddleware(RootReducer);

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const initialState = {};
// export const middleware = [thunk];
// export const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
