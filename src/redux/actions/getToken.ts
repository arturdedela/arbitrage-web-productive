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

    try {
      const response = await API.getToken(login, password);
      dispatch(tokenSuccess(response.token));
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
    } catch (e) {
      console.error(e);
    }
  };
}