import ActionTypes from "../actionTypes";
import { Reducer } from "redux";
import { CoinBalance } from "../types";

let coinsBalances: Reducer<CoinBalance[] | null> = function (state = null, action) {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.LOAD_COINS_BALANCES_SUCCESS:
      return payload.coinsBalances;

    default:
      return state;
  }
};

export default coinsBalances;