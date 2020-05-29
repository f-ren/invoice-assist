import React, { Component } from 'react';

export default class SignUpForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {},
  };

  state = { error: null };

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const {
      user_name,
      password,
      reenter_password,
      first_name,
      last_name,
      company_name,
    } = e.target;
  };
  render() {
    const { error } = this.state;
    return (
      <form
        className="SignUpForm"
        onSubmit={(e) => this.handleSubmitJwtAuth(e)}
      >
        <div className="error">{error && <p className="alert">{error}</p>}</div>
        <p>
          User Name : <input required name="user_name" aria-label="user_name" />
        </p>
        <p>
          Password :{' '}
          <input
            required
            name="password"
            type="password"
            aria-label="password"
          />
        </p>
        <p>
          Re-enter Password :{' '}
          <input
            required
            name="reenter_password"
            type="password"
            aria-label="reenter-password"
          />
        </p>
        <p>
          First Name :{' '}
          <input
            required
            name="first_name"
            type="text"
            aria-label="first-name"
          />
        </p>
        <p>
          Last Name :{' '}
          <input required name="last_name" type="text" aria-label="last-name" />
        </p>
        <p>
          Company Name :{' '}
          <input
            required
            name="company_name"
            type="text"
            aria-label="company-name"
          />
        </p>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
