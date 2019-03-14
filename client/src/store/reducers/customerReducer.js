import {
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  CLEAR_CUSTOMERS,
  EDIT_CUSTOMER,
  CUSTOMER_STOP_LOADING,
  DELETE_CUSTOMER
} from "../actions/types";
import { stat } from "fs";

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

    case DELETE_CUSTOMER:
      return {
        ...state,
        loading: false,
        list: state.list.filter(c => c._id !== action.payload._id)
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
