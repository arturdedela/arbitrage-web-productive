import API from "../helpers/API";
import ActionTypes from "../actionTypes";
import {AppState} from "../types";

const loadBalanceRequest = {
  type: ActionTypes.LOAD_BALANCE_REQUEST
};

const loadBalanceSuccess = (balance: number) => ({
  type: ActionTypes.LOAD_BALANCE_SUCCESS,
  payload: { balance }
});

export function loadBalance() {
  return async (dispatch: any, getState: () => AppState) => {
    dispatch(loadBalanceRequest);

    const result = await API.loadBalance(getState().token);
    dispatch(loadBalanceSuccess(result.balance));
  }
}