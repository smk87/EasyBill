import { GET_ERRORS, SET_CURRENT_USER, SIGNUP_SUCCESS } from "../actions/types";
import validate from "validator";

const initialState = {
  isAuthenticated: false,
  user: {},
  signupSuccess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      if (!action.payload.username) {
        action.payload.username = "";
      }
      return {
        ...state,
        isAuthenticated: !validate.isEmpty(action.payload.username, {
          ignore_whitespace: true
        }),
        user: action.payload
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: action.payload
      };

    default:
      return state;
  }
}
