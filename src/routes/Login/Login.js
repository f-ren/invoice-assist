import React, { Component } from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <section className="LoginPage">
        <h2>Login</h2>
        <LoginForm {...this.props} />
      </section>
    );
  }
}
