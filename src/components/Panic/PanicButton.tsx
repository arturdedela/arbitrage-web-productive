import * as React from "react";
import ConfirmButton from "../ConfirmButton";
import { PanicResult } from "../../redux/types";
import { Button, Modal } from "semantic-ui-react";

interface Props {
  name: string
  panicAction: () => Promise<PanicResult>
}

interface State {
  modalOpen: boolean
  modalContent: string
}

export default class PanicButton extends React.Component<Props, State> {
  state = { modalOpen: false, modalContent: "" };

  action = async () => {
    const result = await this.props.panicAction();

    if (result.hasOwnProperty("successful")) {
      this.setState({ modalOpen: true, modalContent: "Success"});
    } else {
      this.setState( { modalOpen: true, modalContent: "Error: " + result.description})
    }
  };

  render() {
    return (
      <div>
        <ConfirmButton action={this.action} negative>{this.props.name}</ConfirmButton>
        <Modal
          open={this.state.modalOpen}
        >
          <Modal.Content>{this.state.modalContent}</Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.setState({ modalOpen: false })}>OK</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}