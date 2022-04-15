import { combineReducers } from "redux";
import movie from "./movie";
const reducers = combineReducers({ movie });
export default reducers;
export type AppState = ReturnType<typeof reducers>;
