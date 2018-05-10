import * as React from "react";
import {connect} from "react-redux";
import * as _ from "lodash";
import {AppState, ArbitrageTrades} from "../../redux/types";
import {AccordionTitleProps, Accordion, Icon} from "semantic-ui-react";
import Markets from "./Markets";

interface State {
  activePairs: number[]
}

interface Props {
  trades: ArbitrageTrades
}

class Trades extends React.Component<Props, State> {
  state: State = { activePairs: [] };

  handleClick = (e: any, titleProps: AccordionTitleProps) => {
    const { index } = titleProps;
    const { activePairs } = this.state;
    _.indexOf(activePairs, index) === -1
      ? activePairs.push(index as number)
      : _.pull(activePairs, index);

    this.setState({ activePairs })
  };

  render() {
    const {trades} = this.props;
    const {activePairs} = this.state;
    console.log(trades);

    return _.map(trades.coins, (pair, pairIndex) => {
      const active = _.indexOf(activePairs, pairIndex) >= 0;

      return (
        <Accordion styled fluid key={pairIndex}>
          <Accordion.Title
            active={active}
            index={pairIndex}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            {`${pair.coin_1} - ${pair.coin_2}`}
          </Accordion.Title>

          <Accordion.Content active={active}>
            <Markets markets={pair.markets}/>
          </Accordion.Content>
        </Accordion>
      )
    })
  }
}

const mapStateToProps = (state: AppState) => ({
  trades: state.trades
});

export default connect(mapStateToProps)(Trades);