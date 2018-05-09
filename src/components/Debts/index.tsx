import * as React from "react";
import { connect } from "react-redux";
import { AppState, Debt } from "../../redux/types";
import * as _ from "lodash";
import { loadDebts } from "../../redux/actions/loadDebts";
import { Table } from "semantic-ui-react";

interface Props {
  debts: Debt[]
  loadDebts: () => any
}

interface State {

}

class Debts extends React.Component<Props, State> {

  componentWillMount() {
    this.props.loadDebts();
  }

  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Market</Table.HeaderCell>
            <Table.HeaderCell>Trade type</Table.HeaderCell>
            <Table.HeaderCell>Master coin</Table.HeaderCell>
            <Table.HeaderCell>Slave coin</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {_.map(this.props.debts, (debt, key) => (
            <Table.Row key={key}>
              <Table.Cell>{debt.market}</Table.Cell>
              <Table.Cell>{debt.trade_type}</Table.Cell>
              <Table.Cell>{debt.master_coin}</Table.Cell>
              <Table.Cell>{debt.slave_coin}</Table.Cell>
              <Table.Cell>{debt.price}</Table.Cell>
              <Table.Cell>{debt.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  debts: state.debts
});

export default connect(mapStateToProps, { loadDebts })(Debts);