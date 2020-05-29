import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InvoiceContext from '../../../context/InvoiceAssist';
import Invoices from '../Invoices/Invoices';
// import Filter from '../Filter';

export default class InvoiceList extends Component {
  static contextType = InvoiceContext;

  renderInvoices() {
    const { invoices } = this.context;
    return invoices.map((invoice) => (
      <Invoices key={invoice.id} invoice={invoice} />
    ));
  }

  render() {
    return (
      <section className="InvoiceList">
        <Link to="/add-invoice"> New Invoice</Link>
        {this.context.invoices.length === 0 ? (
          <div className="empty">
            <p>No Invoices created!</p>
          </div>
        ) : (
          <div className="list">{this.renderInvoices()}</div>
        )}
      </section>
    );
  }
}
