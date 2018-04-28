import ActionTypes from "../actionTypes";
import { ArbitrageTrades } from "../types";
import { AnyAction } from "redux";

const initialState: ArbitrageTrades = {
  total_data: {
    full_trades: 0,
    only_first: 0
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