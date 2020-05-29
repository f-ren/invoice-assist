import React, { Component } from 'react';
import InvoiceContext from '../../context/InvoiceAssist';
import NewInvoice from '../../components/Forms/NewInvoice/NewInvoice';
import './AddInvoice.css';

export default class AddInvoice extends Component {
  static contextType = InvoiceContext;

  render() {
    return (
      <div className="AddInvoice">
        <NewInvoice {...this.props} />
      </div>
    );
  }
}
