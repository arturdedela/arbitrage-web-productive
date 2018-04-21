import { combineReducers } from "redux";
import token from "./token";
import balance from "./balance";
import coinsBalances from "./coinsBalances";
import chartModal from "./chartModal";


export default combineReducers({
  token,
  balance,
  coinsBalances,
  chartModal
});