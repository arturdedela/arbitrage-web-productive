import { combineReducers } from "redux";
import token from "./token";
import balance from "./balance";
import coinsBalances from "./coinsBalances";
import chartModal from "./chartModal";
import refreshChart from "./refreshChart";
import trades from "./trades";


export default combineReducers({
  token,
  balance,
  coinsBalances,
  chartModal,
  refreshChart,
  trades
});