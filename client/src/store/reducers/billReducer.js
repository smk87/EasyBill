import {
  ADD_CUSTOMER,
  GET_ERRORS,
  LOADING,
  STOP_LOADING,
  CLEAR_SUCCESS
} from "../actions/types";

const initialState = {
  loading: false,
  addCustomerSuccess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        addCustomerSuccess: false
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };

    case ADD_CUSTOMER:
      return {
        ...state,
        loading: false,
        addCustomerSuccess: true
      };

    case CLEAR_SUCCESS:
      return {
        ...state,
        addCustomerSuccess: false
      };

    default:
      return state;
  }
}
