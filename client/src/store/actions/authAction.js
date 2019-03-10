import { GET_ERRORS } from "./types";
import axios from "axios";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/user/register", userData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
