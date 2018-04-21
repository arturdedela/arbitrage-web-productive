import * as React from "react";
import * as _ from "lodash";
import {Table} from "semantic-ui-react";
import {connect} from "react-redux";
import {AppState, CoinBalance} from "../../redux/types";
import {openChartModal} from "../../redux/actions/chartModal";
import {loadCoinsBalances} from "../../redux/actions/loadCoinsBalances";

interface Props {
  coinsBalances: CoinBalance[]
  openChartModal: (coin: string) => any
  loadCoinsBalances: () => any
}

class CoinsBalances extends React.Component<Props> {

  componentDidMount() {
    this.props.loadCoinsBalances();
  }

  render() {
    return (
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Coin</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Change</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {_.map(this.props.coinsBalances, ({coin, amount_now, delta}, key) => (
            <Table.Row key={key} onClick={() => this.props.openChartModal(coin)} style={{cursor: "pointer"}}>
              <Table.Cell>{coin}</Table.Cell>
              <Table.Cell>{amount_now}</Table.Cell>
              <Table.Cell positive={delta > 0} negative={delta < 0}>{delta}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  coinsBalances: state.coinsBalances
});

export default connect(mapStateToProps, { loadCoinsBalances, openChartModal })(CoinsBalances)