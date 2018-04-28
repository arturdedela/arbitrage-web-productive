import * as React from "react";
import {Segment, Statistic} from "semantic-ui-react";
import {connect} from "react-redux";
import {AppState} from "../../redux/types";
import {loadBalance} from "../../redux/actions/loadBalance";
import { loadTrades } from "../../redux/actions/loadTrades";

interface Props {
  balance: number
  loadBalance: () => any
  loadTrades: () => any
  tradeData: { only_first: number, full_trades: number }
}

class Balance extends React.Component<Props> {

  componentWillMount() {
    this.props.loadBalance();
    this.props.loadTrades();
  }

  render() {
    const { balance, tradeData } = this.props;

    return (
      <Segment basic loading={balance === null} textAlign="center">

        <Statistic>
          <Statistic.Value>{balance} BTC</Statistic.Value>
          <Statistic.Label>Balance</Statistic.Label>
        </Statistic>

        <Statistic.Group widths="2" size="small">

          <Statistic>
            <Statistic.Label>Full trades</Statistic.Label>
            <Statistic.Value>{tradeData.full_trades}</Statistic.Value>
          </Statistic>

          <Statistic>
            <Statistic.Label>Only first</Statistic.Label>
            <Statistic.Value>{tradeData.only_first}</Statistic.Value>
          </Statistic>

        </Statistic.Group>

      </Segment>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  balance: state.balance,
  tradeData: state.trades.total_data
});

export default connect(mapStateToProps, { loadBalance, loadTrades })(Balance)
