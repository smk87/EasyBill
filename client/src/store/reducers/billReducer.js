import { ADD_CUSTOMER, GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return action.payload;

    default:
      return state;
  }
}
