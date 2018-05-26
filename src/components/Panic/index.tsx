import * as React from "react";
import PanicButton from "./PanicButton";
import API from "../../redux/helpers/API";
import { connect } from "react-redux";
import { AppState } from "../../redux/types";

function sell({token}: {token: string}) {
  return  <PanicButton name="Panic sell" panicAction={() => API.panicSell(token)} />
}

function recover({token}: {token: string}) {
  return <PanicButton name="Recover" panicAction={() => API.recoverPanicSell(token)} />
}

const PanicSell = connect((state: AppState) => ({token: state.token}))(sell);
const SellRecover = connect((state: AppState) => ({token: state.token}))(recover);

export {
  PanicSell,
  SellRecover
}