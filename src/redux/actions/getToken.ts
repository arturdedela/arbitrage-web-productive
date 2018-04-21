import API from "../helpers/API";
import ActionTypes from "../actionTypes";

const tokenRequest = {
  type: ActionTypes.GET_TOKEN_REQUEST
};

const tokenSuccess = (token: string) => ({
  type: ActionTypes.GET_TOKEN_SUCCESS,
  payload: { token }
});

export default function getToken(login: string, password: string) {
  return async (dispatch: any) => {
    dispatch(tokenRequest);

    const response = await API.getToken(login, password);
    dispatch(tokenSuccess(response.token));
  };
}