import React, { Component } from 'react';
import InvoiceApiService from '../../../services/invoice-api-service';
import InvoiceContext from '../../../context/InvoiceAssist';

export default class ReviewInvoice extends Component {
  static contextType = InvoiceContext;
  handleBack = (e) => {
    e.preventDefault();
    this.setState({ review: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, id, client, date, total } = this.props;
    InvoiceApiService.updateInvoice(id, client, date, total).catch(
      this.context.setError
    );
    items.forEach((item) =>
      InvoiceApiService.postItem(id, item.product_id, item.qty).catch(
        this.context.setError
      )
    );
    this.props.history.push('/dashboard');
  };
  render() {
    const { info, products } = this.context;
    const { items, client, back, date, total } = this.props;

    return (
      <div className="ReviewInvoice">
        <h2>Invoice</h2>
        <h4>{info.company_name}</h4>
        <p className="title">
          Client: {client} - {date}
        </p>
        <ul>
          {items.map((item, i) => {
            const product = products.find((p) => p.id === item.product_id);
            return (
              <li key={i}>
                {product.descr} - {item.qty} - ${product.sale_price}
              </li>
            );
          })}
        </ul>
        <p className="total">Total Sale: ${total}</p>
        <form onSubmit={back}>
          <input
            aria-label="back button"
            className="invoive-btn"
            type="submit"
            value="Go back"
          />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input
            aria-label="create invoice"
            className="invoive-btn"
            type="submit"
            value="Create Invoice"
          />
        </form>
      </div>
    );
  }
}
