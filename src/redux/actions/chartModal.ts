import ActionTypes from "../actionTypes";


export function openChartModal(coin: string) {
  return {
    type: ActionTypes.OPEN_CHART_MODAL,
    payload: { coin }
  }
}

export function closeChartModal() {
  return {
    type: ActionTypes.CLOSE_CHART_MODAL
  }
}