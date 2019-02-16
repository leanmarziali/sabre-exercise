import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand
} from 'reactstrap';
import { connect } from 'react-redux';

import './app.style.scss';
import Home from './views/Home/Home';
import logo from './assets/img/logo.svg';
import refreshIcon from './assets/icon/baseline-refresh/2x/baseline_refresh_black_18dp.png';
import {
  fetchPlayersIfNeeded,
  invalidatePlayers
} from './actions/';

// Also export App in order to test the non-wrappable component (unit testing)
export class App extends Component {

  componentWillMount() {
    this.props.refreshHandler();
  }

  onClickHandler = (event) => {
    event.preventDefault();
    this.props.refreshHandler();
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Intive-fdv</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <img className="refresh-icon" onClick={ this.onClickHandler } src={refreshIcon} alt="refresh-icon" />
                <img src={logo} className="app-logo" alt="logo" />
            </NavItem>
          </Nav>
        </Navbar>
        <Home />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    refreshHandler: () => {
      dispatch(invalidatePlayers());
      dispatch(fetchPlayersIfNeeded());
    }
  }
);

export default connect(null, mapDispatchToProps)(App);
