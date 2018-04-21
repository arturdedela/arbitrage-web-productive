import ActionTypes from "../actionTypes";
import {Reducer} from "redux";

let token: Reducer<string | null> = function (state = null, action) {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.GET_TOKEN_SUCCESS:
      return payload.token;

    default:
      return state;
  }
};

export default token;