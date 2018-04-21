import * as React from "react";
import {Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {AppState} from "../../redux/types";
import API from "../../redux/helpers/API";
import Chart from "../Chart";

interface OwnProps {
  coin: string
}

interface Props extends OwnProps {
  loadHistory: () => Promise<[[number, number]]>
}

class CoinHistoryChart extends React.Component<Props> {

  render() {
    return (
      <Segment>
        <Chart
          id="coin_chart"
          title={`${this.props.coin} history`}
          loadData={this.props.loadHistory}
        />
      </Segment>
    )
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  loadHistory: (date_start: number, date_end: number) =>
    API.loadCoinBalanceHistory(state.token, ownProps.coin, date_start, date_end),
});

export default connect(mapStateToProps)(CoinHistoryChart)
