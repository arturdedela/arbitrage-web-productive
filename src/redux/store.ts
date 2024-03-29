import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import reducers from "./reducers";

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);
