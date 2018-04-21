import * as React from "react";
import Auth from "./components/Auth/index";
import Balance from "./components/Balance";
import {Container} from "semantic-ui-react";
import BalanceHistory from "./components/BalanceHistoryChart";
import CoinsBalances from "./components/CoinsBalances";
import ChartModal from "./components/ChartModal";

class App extends React.Component {
  render() {
    return (
      <Auth>
        <Container>
          <Balance />
          <BalanceHistory />
          <CoinsBalances />
          <ChartModal />
        </Container>
      </Auth>
    )
  }
}

export default App;
