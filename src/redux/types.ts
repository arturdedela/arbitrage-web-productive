
export type AppState = {
  token: string

  balance: number
  balanceHistory: [[Date, number]]

  coinsBalances: CoinBalance[]
  coinBalanceHistory: [[Date, number]]

  chartModal: ChartModal
}

export type ChartModal = {
  isOpen: boolean
  coin: string
}

export type CoinBalance = {
  coin: string
  amount_now: number
  delta: number
}