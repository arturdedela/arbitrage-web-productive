import API from "../helpers/API";
import ActionTypes from "../actionTypes";
import {AppState, CoinBalance} from "../types";

const loadCoinsRequest = {
  type: ActionTypes.LOAD_COINS_BALANCES_REQUEST
};

const loadCoinsSuccess = (coinsBalances: CoinBalance[]) => ({
  type: ActionTypes.LOAD_COINS_BALANCES_SUCCESS,
  payload: { coinsBalances }
});

export function loadCoinsBalances() {
  return async (dispatch: any, getState: () => AppState) => {
    dispatch(loadCoinsRequest);

    const coinsBalances = await API.loadCoinsBalances(getState().token);
    dispatch(loadCoinsSuccess(coinsBalances));
  }
}