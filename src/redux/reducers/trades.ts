import ActionTypes from "../actionTypes";
import { ArbitrageTrades } from "../types";
import { AnyAction } from "redux";

const initialState: ArbitrageTrades = {
  total_data: {
    first: 0,
    second: 0
  },
  coins: null
};

export default function(state: ArbitrageTrades = initialState, action: AnyAction) {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.LOAD_TRADES_SUCCESS:
      return payload.trades;

    default:
      return state;
  }
}