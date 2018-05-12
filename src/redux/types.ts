
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
    first: number
    second: number
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
    trade_type: string
    market: string
    master_coin: string
    slave_coin: string
    price: number
    timestamp: number
    trade_status: string
    amount: number
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