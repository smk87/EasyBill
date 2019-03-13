import { GET_CUSTOMERS, CUSTOMER_LOADING } from "../actions/types";
import axios from "axios";

//Get all customers
export const getCustomers = (userdata, history) => dispatch => {
  dispatch({ type: CUSTOMER_LOADING });
  axios.get("/api/customer").then(customers => {
    dispatch({
      type: GET_CUSTOMERS,
      payload: customers.data
    });
  });
};
