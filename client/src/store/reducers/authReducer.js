import { GET_ERRORS, SET_CURRENT_USER } from "../actions/types";
import validate from "validator";

const initialState = {
  isAuthenticated: false,
  user: {}
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

    default:
      return state;
  }
}
