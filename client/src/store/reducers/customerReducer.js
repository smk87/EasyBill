import {
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  CLEAR_CUSTOMERS,
  EDIT_CUSTOMER,
  CUSTOMER_STOP_LOADING
} from "../actions/types";

const initialState = {
  loading: false,
  updatedCustomer: false,
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };

    case EDIT_CUSTOMER:
      return {
        ...state,
        loading: false,
        updatedCustomer: true
      };

    case CLEAR_CUSTOMERS:
      return {
        ...state,
        list: []
      };

    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: true
      };

    case CUSTOMER_STOP_LOADING:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
