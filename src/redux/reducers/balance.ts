import ActionTypes from "../actionTypes";
import { Reducer } from "redux";

let balance: Reducer<number | null> = function (state = null, action) {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.LOAD_BALANCE_REQUEST:
      return null;

    case ActionTypes.LOAD_BALANCE_SUCCESS:
      return payload.balance;

    default:
      return state;
  }
};

export default balance;