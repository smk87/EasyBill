import { ADD_CUSTOMER, GET_ERRORS } from "./types";
import axios from "axios";

//Add Customer
export const addCustomer = (userData, history) => dispatch => {
  axios
    .post("/api/bill", userData)
    .then(res => {
      dispatch({
        type: ADD_CUSTOMER,
        payload: userData
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
