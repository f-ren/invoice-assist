import React, { Component } from 'react';
import InvoiceList from '../../components/Invoices/InvoiceList/InvoiceList';
import InvoiceContext from '../../context/InvoiceAssist';
import InvoiceApiService from '../../services/invoice-api-service';
import './Dashboard.css';

export default class Dashboard extends Component {
  static contextType = InvoiceContext;

  componentDidMount() {
    InvoiceApiService.getInvoices()
      .then(this.context.setInvoices)
      .catch(this.context.setError);
    InvoiceApiService.getItems()
      .then(this.context.setItems)
      .catch(this.context.setError);
    InvoiceApiService.getProducts()
      .then(this.context.setProducts)
      .catch(this.context.setError);
  }

  render() {
    return (
      <section className="Dashboard">
        <h2>Invoices</h2>
        <InvoiceList {...this.props} />
      </section>
    );
  }
}
