import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { userReducer } from "./userReducer";
import { homeReducer } from "./homeReducer";

const rootReducer = combineReducers({
  reducer,
  user: userReducer,
  feeds:homeReducer,
});

export default rootReducer;
