import * as React from "react";
import { Button, ButtonProps, Confirm } from "semantic-ui-react";

interface Props extends ButtonProps {
  action: () => any
}

interface State {
  open: boolean
}

class ConfirmButton extends React.Component<Props, State> {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  confirm = () => {
    this.props.action();
    this.close();
  };

  render() {
    const { action, children, ...props } = this.props;

    return (
      <div>
        <Button onClick={this.open} {...props}>{children}</Button>
        <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.confirm} />
      </div>
    )
  }
}

export default ConfirmButton;