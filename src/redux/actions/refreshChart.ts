import ActionTypes from "../actionTypes";


export function refreshChart(chartID: string) {
  return {
    type: ActionTypes.REFRESH_CHART,
    payload: { chartID }
  }
}

export function chartRefreshed() {
  return {
    type: ActionTypes.REFRESH_CHART_SUCCESS
  }
}