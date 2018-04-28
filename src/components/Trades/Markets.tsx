import * as React from "react";
import * as _ from "lodash";
import {Accordion, AccordionTitleProps, Icon, Table} from "semantic-ui-react";
import {ArbitrageTradesMarkets} from "../../redux/types";

interface State {
  activeMarkets: number[]
}

interface Props {
  markets: ArbitrageTradesMarkets
}

class Markets extends React.Component<Props, State> {
  state: State = {activeMarkets: []};

  handleClick = (e: any, titleProps: AccordionTitleProps) => {
    const { index } = titleProps;
    const { activeMarkets } = this.state;
    _.indexOf(activeMarkets, index) === -1
      ? activeMarkets.push(index as number)
      : _.pull(activeMarkets, index);

    this.setState({ activeMarkets })
  };

  render() {
    const {activeMarkets} = this.state;

    return _.map(this.props.markets, (markets, marketIndex) => {
      const active = _.indexOf(activeMarkets, marketIndex) >= 0;

      return (
        <Accordion styled fluid key={marketIndex}>
          <Accordion.Title
            active={active}
            index={marketIndex}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            {`${markets.market_1} - ${markets.market_2}`}
          </Accordion.Title>

          <Accordion.Content active={active}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Market</Table.HeaderCell>
                  <Table.HeaderCell>Buy</Table.HeaderCell>
                  <Table.HeaderCell>Sell</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {_.map(markets.records, (data, key) => (
                  <Table.Row key={key}>
                    <Table.Cell>{data.type}</Table.Cell>
                    <Table.Cell>{data.market}</Table.Cell>
                    <Table.Cell>{data.coin_buy}</Table.Cell>
                    <Table.Cell>{data.coin_sell}</Table.Cell>
                    <Table.Cell>{data.price_sell}</Table.Cell>
                    <Table.Cell>{data.amount_sell}</Table.Cell>
                    <Table.Cell>{new Date(data.timestamp).toLocaleString()}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>

            </Table>
          </Accordion.Content>
        </Accordion>
      )
    })
  }
}

export default Markets;