import * as React from "react";
import {Modal} from "semantic-ui-react";
import {connect} from "react-redux";
import {AppState} from "../../redux/types";
import {closeChartModal} from "../../redux/actions/chartModal";
import CoinHistoryChart from "../CoinHistoryChart";

interface Props {
  isOpen: boolean
  coin: string
  close: () => any
}

class ChartModal extends React.Component<Props> {

  render() {
    const { isOpen, close, coin } = this.props;

    return (
      <Modal open={isOpen} onClose={close}>
        <Modal.Header>{coin} history chart</Modal.Header>
        <Modal.Content>
          <CoinHistoryChart coin={coin} />
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state: AppState) => state.chartModal;

export default connect(mapStateToProps, {close: closeChartModal})(ChartModal);