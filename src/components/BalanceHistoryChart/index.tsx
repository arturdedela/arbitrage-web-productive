import * as React from "react";
import {Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {AppState} from "../../redux/types";
import API from "../../redux/helpers/API";
import Chart from "../Chart";

interface Props {
  loadHistory: (date_start: number, date_end: number) => Promise<[[number, number]]>
}

class BalanceHistory extends React.Component<Props> {

  render() {
    return (
      <Segment>
        <Chart
          id="balance_chart"
          title="Balance history"
          loadData={this.props.loadHistory}
        />
      </Segment>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  loadHistory: (date_start: number, date_end: number) => API.loadBalanceHistory(state.token, date_start, date_end),
});

export default connect(mapStateToProps)(BalanceHistory);