import React, { Component } from 'react';
import SignUpForm from '../../components/Forms/SignUp/SignUp';

export default class SignUpPage extends Component {
  render() {
    return (
      <section className="SignUpPage">
        <h2>Sign Up</h2>
        <SignUpForm />
      </section>
    );
  }
}
