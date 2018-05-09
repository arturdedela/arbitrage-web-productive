
export type AppState = {
  token: string

  balance: number
  balanceHistory: [[Date, number]]

  coinsBalances: CoinBalance[]
  coinBalanceHistory: [[Date, number]]

  trades: ArbitrageTrades
  debts: Debt[]

  chartModal: ChartModal

  refreshChart: null | { chartID: string }
}

export type ChartModal = {
  isOpen: boolean
  coin: string
}

export type CoinBalance = {
  coin: string
  amount_now: number
  delta: number
  delta_percent: number
}

export type ArbitrageTrades = {
  total_data: {
    only_first: number
    full_trades: number
  }
  coins: [{
    coin_1: string
    coin_2: string
    markets: ArbitrageTradesMarkets
  }] | null
}

export type ArbitrageTradesMarkets = [{
  market_1: string
  market_2: string
  records: [{
    type: string
    market: string
    coin_buy: string
    coin_sell: string
    price_sell: number
    amount_sell: number
    timestamp: number
  }]
}]

export type Debt = {
  market: string
  trade_type: string
  master_coin: string
  slave_coin: string
  price: number
  amount: number
}