import React, { Component } from 'react';
import TokenService from '../../../services/token-service';
import AuthApiService from '../../../services/auth-api-service';

export default class LoginForm extends Component {
  state = {
    error: null,
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;
    AuthApiService.loginPost({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveToken(res.authToken, () => {
          this.props.history.replace('/dashboard');
        });
      })
      .catch((res) => this.setState({ error: res.error }));
  };
  handleDemoSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const username = 'mmm';
    const password = 'password';
    AuthApiService.loginPost({
      user_name: username,
      password: password,
    })
      .then((res) => {
        TokenService.saveToken(res.authToken, () => {
          this.props.history.replace('/dashboard');
        });
      })
      .catch((res) => this.setState({ error: res.error }));
  };
  render() {
    const { error } = this.state;
    return (
      <div className="Login">
        <form
          className="LoginForm"
          onSubmit={(e) => this.handleSubmitJwtAuth(e)}
        >
          <div className="error">
            {error && <p className="alert">{error}</p>}
          </div>
          <p>
            <input
              required
              name="user_name"
              aria-label="user_name"
              placeholder="user name"
            />
          </p>
          <p>
            <input
              required
              name="password"
              type="password"
              aria-label="password"
              placeholder="password"
            />
          </p>
          <input
            aria-label="Login button"
            type="submit"
            className="login-btn"
            value="Login"
          />
        </form>
        <form onSubmit={(e) => this.handleDemoSubmit(e)}>
          <input
            aria-label="Demo button"
            type="submit"
            className="login-btn"
            value="Demo"
          />
        </form>
      </div>
    );
  }
}
