import ActionTypes from "../actionTypes";
import { Reducer } from "redux";
import {ChartModal} from "../types";

const initialState: ChartModal = {
  isOpen: false,
  coin: ""
};

let chartModal: Reducer<ChartModal> = function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.OPEN_CHART_MODAL:
      return { isOpen: true, coin: payload.coin };

    case ActionTypes.CLOSE_CHART_MODAL:
      return initialState;

    default:
      return state;
  }
};

export default chartModal;