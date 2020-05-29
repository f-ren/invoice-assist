import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearToken(() => {
      this.props.history.push('/');
    });
  };
  renderAccountNav() {
    return (
      <div className="logged-in">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/account">Account</Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }
  renderLoginNav() {
    return (
      <div className="login-nav">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Register</Link>
      </div>
    );
  }
  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">Invoice Assist</Link>
        </h1>

        <div className="login-nav">
          {TokenService.hasToken()
            ? this.renderAccountNav()
            : this.renderLoginNav()}
          <div className="login-nav"></div>
        </div>
      </nav>
    );
  }
}
