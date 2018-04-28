import ActionTypes from "../actionTypes";
import { AnyAction } from "redux";


export default function (state = null, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.REFRESH_CHART:
      return { chartID: payload.chartID };

    case ActionTypes.REFRESH_CHART_SUCCESS:
      return null;

    default:
      return state;
  }
}