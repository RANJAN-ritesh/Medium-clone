import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  reducer,
  user: userReducer,
});

export default rootReducer;
