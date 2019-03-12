import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import billReducer from "./billReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  bills: billReducer
});
