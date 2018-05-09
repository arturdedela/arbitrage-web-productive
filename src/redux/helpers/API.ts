import axios from "axios";
import * as qs from "qs";
import { ArbitrageTrades, CoinBalance, Debt } from "../types";


class API {
  private readonly apiURL = `${window.location.origin}/api_prod/v1`;
  private api = axios.create({
    baseURL: this.apiURL
  });

  async getToken(login: string, password: string): Promise<{token: string}> {
    const {data} = await this.api.post("/get_token", qs.stringify({login, password}));
    return data;
  }


  async loadBalance(token: string): Promise<{balance: number}> {
    const {data} = await this.api.get("/get_balance_in_btc", { params: { token } });
    return data;
  }

  async loadBalanceHistory(token: string, date_start: number, date_end: number): Promise<[[number, number]]> {
    const {data} = await this.api.get("/get_balance_in_btc_history", { params: { token, date_start, date_end } });
    return data;
  }


  async loadCoinsBalances(token: string): Promise<CoinBalance[]> {
    const {data} = await this.api.get("/get_coins_amount", { params: { token } });
    return data;
  }

  async loadCoinBalanceHistory(token: string, coin: string, date_start: number, date_end: number): Promise<[[number, number]]> {
    const {data} = await this.api.get("/get_coin_balance_history", {
      params: { token, coin, date_start, date_end }
    });
    return data;
  }

  async loadTrades(token: string, date_start: number, date_end: number): Promise<ArbitrageTrades> {
    const { data } = await this.api.get("/get_trades", { params: {token, date_start, date_end} });
    return data;
  }

  async loadDebts(token: string): Promise<Debt[]> {
    const { data } = await this.api.get("/get_debts", { params: { token } });
    return data;
  }

}

export default new API();