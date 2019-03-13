import {
  ADD_CUSTOMER,
  GET_ERRORS,
  LOADING,
  STOP_LOADING,
  CLEAR_SUCCESS
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
