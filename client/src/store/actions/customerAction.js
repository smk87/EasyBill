import {
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  CLEAR_CUSTOMERS,
  LOADING,
  ADD_CUSTOMER,
  STOP_LOADING,
  CLEAR_SUCCESS,
  GET_ERRORS,
  EDIT_CUSTOMER,
  CUSTOMER_STOP_LOADING,
  DELETE_CUSTOMER
} from "../actions/types";
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

//Edit specific customer
export const editCustomer = (userData, history) => dispatch => {
  dispatch({
    type: CUSTOMER_LOADING
  });
  axios
    .post("/api/bill", userData)
    .then(res => {
      dispatch({
        type: EDIT_CUSTOMER
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: CUSTOMER_STOP_LOADING
      });
      //Clear add customer success msg
      dispatch({
        type: CLEAR_SUCCESS
      });
    });
};

//Delete Specific customer
export const deleteCustomer = (userData, history) => dispatch => {
  dispatch({
    type: CUSTOMER_LOADING
  });
  axios
    .delete(`/api/customer/${userData}`)
    .then(newCus => {
      dispatch({
        type: DELETE_CUSTOMER,
        payload: newCus.data
      });
    })
    .catch(err => {
      dispatch({
        type: CUSTOMER_STOP_LOADING
      });
      console.log(err);
    });
};

//Clear customers from store
export const clearCustomers = dispatch => {
  return {
    type: CLEAR_CUSTOMERS
  };
};
