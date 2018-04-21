import * as React from "react";
import {Segment, Statistic} from "semantic-ui-react";
import {connect} from "react-redux";
import {AppState} from "../../redux/types";
import {loadBalance} from "../../redux/actions/loadBalance";

interface Props {
  balance: number
  loadBalance: () => any
}

class Balance extends React.Component<Props> {

  componentWillMount() {
    this.props.loadBalance();
  }

  render() {
    const {balance} = this.props;

    return (
      <Segment basic loading={balance === null} textAlign="center">
        <Statistic>
          <Statistic.Label>Balance</Statistic.Label>
          <Statistic.Value>{balance} BTC</Statistic.Value>
        </Statistic>
      </Segment>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  balance: state.balance
});

export default connect(mapStateToProps, {loadBalance})(Balance)
