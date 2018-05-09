import ActionTypes from "../actionTypes";
import { Debt } from "../types";
import { AnyAction } from "redux";


export default function (state: Debt[] = [], action: AnyAction) {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.LOAD_DEBTS_SUCCESS:
      return payload.debts;

    default:
      return state;
  }
}