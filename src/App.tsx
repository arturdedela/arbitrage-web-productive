import * as React from "react";
import Auth from "./components/Auth/index";
import Balance from "./components/Balance";
import { Container, Header, Menu } from "semantic-ui-react";
import BalanceHistory from "./components/BalanceHistoryChart";
import CoinsBalances from "./components/CoinsBalances";
import ChartModal from "./components/ChartModal";
import RefreshButton from "./components/RefreshButton";
import Trades from "./components/Trades";
import Debts from "./components/Debts";

class App extends React.Component {

  render() {
    return (
      <Auth>
        <Menu vertical fixed="top" compact inverted>
          <Menu.Item href="#coins">Coins</Menu.Item>
          <Menu.Item href="#trades">Trades</Menu.Item>
          <Menu.Item href="#debts">Debts</Menu.Item>
        </Menu>

        <RefreshButton />
        <Container style={{ paddingBottom: "100px" }}>

          <Balance />
          <BalanceHistory />

          <Header id="coins" dividing textAlign="center" size="huge">Coins</Header>
          <CoinsBalances />

          <Header id="trades" dividing textAlign="center" size="huge">Trades</Header>
          <Trades />

          <Header id="debts" dividing textAlign="center" size="huge">Debts</Header>
          <Debts />

          <ChartModal />
        </Container>
      </Auth>
    )
  }
}

export default App;
