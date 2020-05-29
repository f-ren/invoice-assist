import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>Welcome to Invoice Assist</h2>
        <p>Helping small businesses stay organized</p>
        <Link to="/signup">Create a New Account</Link>
        <p>
          Already have an Account? <Link to="/login">Log In</Link>
        </p>
      </div>
    );
  }
}
