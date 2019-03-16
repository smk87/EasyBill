import {
  ADD_CUSTOMER,
  GET_ERRORS,
  LOADING,
  STOP_LOADING,
  CLEAR_SUCCESS,
  GENERATE_BILL
} from "./types";
import axios from "axios";

//Add Customer
export const addCustomer = (userData, history) => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .post("/api/bill", userData)
    .then(res => {
      dispatch({
        type: ADD_CUSTOMER
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: STOP_LOADING
      });
      //Clear add customer success msg
      dispatch({
        type: CLEAR_SUCCESS
      });
    });
};

//Generate Bill
export const generateBill = (id, bill) => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .post(`/api/bill/${id}/generate`, { bill: bill })
    .then(res => {
      console.log(res.data);
      dispatch({ type: GENERATE_BILL });
    })
    .catch(err => {
      dispatch({
        type: STOP_LOADING
      });
      //Clear add customer success msg
      dispatch({
        type: CLEAR_SUCCESS
      });
    });
};
