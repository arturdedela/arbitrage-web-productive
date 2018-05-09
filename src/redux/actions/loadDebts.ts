import API from "../helpers/API";
import ActionTypes from "../actionTypes";
import { AppState, Debt } from "../types";

const loadDebtsSuccess = (debts: Debt[]) => ({
  type: ActionTypes.LOAD_DEBTS_SUCCESS,
  payload: { debts }
});

export function loadDebts() {
  return async (dispatch: any, getState: () => AppState) => {

    const debts = await API.loadDebts(getState().token);

    dispatch(loadDebtsSuccess(debts));
  }
}