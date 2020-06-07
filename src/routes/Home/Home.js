import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="wrapper">
          <h2>Welcome to Invoice Assist</h2>
          <p>Helping small businesses stay organized</p>
          <p>
            <Link to="/signup" className="button primary">
              Create a New Account
            </Link>
          </p>
          <p>
            Already have an Account?{' '}
            <Link to="/login" className="button secondary">
              Log In
            </Link>
          </p>
        </div>
        <section className="photo-credit">
          Photo by Denny Müller on Unsplash
        </section>
      </div>
    );
  }
}
