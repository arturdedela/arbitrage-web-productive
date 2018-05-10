import * as React from "react";
import { Button, Form, Input, Grid, Header, Segment, InputOnChangeData } from "semantic-ui-react";
import getToken from "../../redux/actions/getToken";
import { connect } from "react-redux";
import { AppState } from "../../redux/types";

interface State {
  login: string
  password: string
}

interface Props {
  getToken: (login: string, password: string) => any
  token: string
}

class Auth extends React.Component<Props, State> {
  state = {login: "", password: ""};

  componentWillMount() {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");

    if (login && password) {
      this.props.getToken(login, password);
    }
  }

  handleChange = (e: any, {name, value}: InputOnChangeData) => this.setState({[name]: value});

  submit = () => {
    const {login, password} = this.state;
    this.props.getToken(login, password);
  };

  render() {
    if (this.props.token) {
      return this.props.children;
    }

    return (
      <Grid textAlign="center" style={{minHeight: "100vh"}}>
        <Grid.Column verticalAlign="middle" style={{maxWidth: 450}}>
          <Header as="h2" color="teal" textAlign="center">
            Authorization
          </Header>
          <Form size="large" onSubmit={this.submit}>
            <Segment stacked>
              <Input
                name="login"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Login"
                onChange={this.handleChange}
              />
              <Form.Input
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />

              <Button type="submit" color="teal" fluid size="large">Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  token: state.token
});

export default connect(mapStateToProps, {getToken})(Auth);