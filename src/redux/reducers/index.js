import mainReducer from "./mainReducer";
import quoteReducer from "./quoteReducer"
import tabReducer from "./tabReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  mainReducer,
  quoteReducer,
  tabReducer
});

export default allReducers;
