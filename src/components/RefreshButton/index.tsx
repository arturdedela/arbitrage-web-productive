import "./style.css";
import * as React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { loadBalance } from "../../redux/actions/loadBalance";
import { loadCoinsBalances } from "../../redux/actions/loadCoinsBalances";
import { refreshChart } from "../../redux/actions/refreshChart";
import { loadTrades } from "../../redux/actions/loadTrades";

interface Props {
  loadBalance: () => any
  loadTrades: () => any
  loadCoinsBalances: () => any
  refreshChart: (id: string) => any
}

interface State {

}

class RefreshButton extends React.Component<Props, State> {

  refresh = () => {
    this.props.loadBalance();
    this.props.loadCoinsBalances();
    this.props.loadTrades();
    this.props.refreshChart("balance_chart");
  };

  render() {
    return (
      <Button
        icon
        basic
        size="big"
        className="btn-refresh"
        onClick={this.refresh}
      >
        <Icon name="refresh" />
      </Button>
    )
  }
}

export default connect(null, {
  loadBalance,
  loadCoinsBalances,
  refreshChart,
  loadTrades
})(RefreshButton);