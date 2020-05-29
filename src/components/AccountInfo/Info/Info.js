import React, { Component } from 'react';
import InvoiceContext from '../../../context/InvoiceAssist';
import InvoiceApiService from '../../../services/invoice-api-service';

export default class Info extends Component {
  static contextType = InvoiceContext;
  state = {
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    edit: false,
  };
  handleEdit = (e) => {
    const { user } = this.context;
    e.preventDefault();
    this.setState({
      first_name: user.first_name,
      last_name: user.last_name,
      company_name: user.company_name,
      email: user.email,
      edit: true,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, company_name, email } = this.state;
    InvoiceApiService.updateUser(first_name, last_name, company_name, email)
      .then((res) => this.context.setUser(res))
      .catch((res) => this.context.setError(res));
  };
  renderEditForm = () => {
    const { user } = this.context;
    return (
      <div className="edit-form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            First Name:
            <input
              className="edit"
              onChange={(e) => this.setState({ first_name: e.target.value })}
              defaultValue={user.first_name}
            />
          </p>
          <p>
            Last Name:{' '}
            <input
              className="edit"
              onChange={(e) => this.setState({ last_name: e.target.value })}
              defaultValue={user.last_name}
            />
          </p>
          <p>
            Email:{' '}
            <input
              className="edit"
              onChange={(e) => this.setState({ email: e.target.value })}
              defaultValue={user.email}
            />
          </p>
          <p>
            Company Name:{' '}
            <input
              className="edit"
              onChange={(e) => this.setState({ company_name: e.target.value })}
              value={user.company_name}
            />
          </p>
          <input
            aria-label="Submit Edit"
            className="edit-submit"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  };

  render() {
    const { user } = this.context;
    return (
      <div className="AccountInfo">
        <h3>Account Info</h3>
        {this.state.edit === true ? (
          <div>{this.renderEditForm()}</div>
        ) : (
          <div className="Info" key={user.id}>
            <ul>
              <li>First Name: {user.first_name}</li>
              <li>Last Name: {user.last_name}</li>
              <li>Email: {user.email}</li>
              <li>Company: {user.company_name}</li>
            </ul>
            {/* <button onClick={(e) => this.handleEdit(e)} className="edit-btn">
              Edit
            </button> */}
          </div>
        )}
      </div>
    );
  }
}
