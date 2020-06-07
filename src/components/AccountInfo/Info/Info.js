import React, { Component } from 'react';
import InvoiceContext from '../../../context/InvoiceAssist';
// import InvoiceApiService from '../../../services/invoice-api-service';

export default class Info extends Component {
  static contextType = InvoiceContext;
  state = {
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    edit: false,
  };

  render() {
    const { user } = this.context;
    return (
      <div className="AccountInfo">
        <h3>Account Info</h3>
        <div className="Info" key={user.id}>
          <ul>
            <li>First Name: {user.first_name}</li>
            <li>Last Name: {user.last_name}</li>
            <li>Email: {user.email}</li>
            <li>Company: {user.company_name}</li>
          </ul>
        </div>
      </div>
    );
  }
}
