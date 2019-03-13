import { GET_CUSTOMERS, CUSTOMER_LOADING } from "../actions/types";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };

    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
