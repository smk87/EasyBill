import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import billReducer from "./billReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  bills: billReducer,
  customers: customerReducer
});
