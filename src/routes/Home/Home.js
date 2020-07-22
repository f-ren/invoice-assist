import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="wrapper">
          <h2>Welcome to Invoice Assist</h2>
          <p>
            Our goal is to help small businesses stay organized by providing a
            simple platform for invoice entry.{' '}
            <p>
              Easily keep track of products or services provided to your
              clients.
            </p>
          </p>
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
