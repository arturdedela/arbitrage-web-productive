import API from "../helpers/API";
import ActionTypes from "../actionTypes";
import { AppState, ArbitrageTrades } from "../types";

const tradesRequest = {
  type: ActionTypes.LOAD_TRADES_REQUEST
};

const tradesResponse = (trades: ArbitrageTrades) => ({
  type: ActionTypes.LOAD_TRADES_SUCCESS,
  payload: { trades }
});

export function loadTrades() {
  return async (dispatch: Function, getState: () => AppState) => {
    dispatch(tradesRequest);

    const trades = await API.loadTrades(getState().token, Date.parse("01.01.2018"), Date.now());
    dispatch(tradesResponse(trades));
  };
}