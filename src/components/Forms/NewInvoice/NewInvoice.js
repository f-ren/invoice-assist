import React, { Component } from 'react';
import InvoiceContext from '../../../context/InvoiceAssist';
import InvoiceApiService from '../../../services/invoice-api-service';
import ReviewInvoice from '../ReviewInvoice/ReviewInvoice';

export default class NewInvoiceForm extends Component {
  state = {
    items: [],
    invoiceId: 0,
    client: '',
    date: '',
    product: 0,
    qty: 0,
    total: 0,
    review: false,
  };
  static contextType = InvoiceContext;
  handleAddItem = (e) => {
    e.preventDefault();
    const { items, product, qty } = this.state;
    this.setState({
      items: [...items, { product_id: product, qty }],
      product: 0,
      qty: 0,
    });
  };
  totalSale = (e) => {
    const { products } = this.context;
    let multiple = this.state.items.map((item) => {
      const product = products.find((p) => p.id === item.product_id);
      return product.sale_price * item.qty;
    });
    let total = multiple.reduce((x, y) => x + y);
    this.setState({ total: total });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { client, date } = this.state;
    InvoiceApiService.postInvoice(client, date).then((res) =>
      this.setState({ invoiceId: res.id })
    );
  };
  handleReview = (e) => {
    e.preventDefault();
    this.totalSale();
    this.setState((prev) => ({ review: !prev.review }));
  };
  removeItem = (i) => {
    let items = [...this.state.items];
    items.splice(i, 1);
    this.setState({ items });
  };

  render() {
    const { info, products } = this.context;
    return this.state.review === false ? (
      <div className="NewInvoice">
        {this.state.invoiceId ? (
          <div className="invoice-form">
            <h2>Add Items:</h2>
            <ul>
              {this.state.items.map((item, i) => {
                const product = products.find((p) => p.id === item.product_id);
                return (
                  <li key={i}>
                    {product.descr} - ${product.sale_price} - {item.qty}{' '}
                    <input
                      aria-label="Remove Item"
                      className="invoive-btn"
                      type="submit"
                      value="remove"
                      onClick={() => this.removeItem(i)}
                    />
                  </li>
                );
              })}
            </ul>
            <form onSubmit={this.handleAddItem}>
              <select
                name="product"
                onChange={(e) =>
                  this.setState({ product: Number(e.target.value) })
                }
                aria-label="Product"
              >
                <option value={0}>Select Product...</option>
                {products.map((p, i) => (
                  <option key={i} value={p.id}>
                    {p.descr} - ${p.sale_price}
                  </option>
                ))}
              </select>

              {this.state.product !== 0 && (
                <p>
                  QTY:{' '}
                  <input
                    type="number"
                    name="qty"
                    onChange={(e) => this.setState({ qty: e.target.value })}
                    aria-label="Quantity"
                  />
                </p>
              )}

              <input
                aria-label="add-item"
                className="invoive-btn"
                type="submit"
                disabled={this.state.product === 0 || this.state.qty === 0}
                value="Add Item"
              />
            </form>
            <form onSubmit={this.handleReview}>
              <input
                aria-label="review"
                className="invoive-btn"
                type="submit"
                disabled={this.state.items.length === 0}
                value="Review"
              />
            </form>
          </div>
        ) : (
          <div className="NewInvoice">
            <h2>Create New Invoice</h2>
            <div className="invoice-form">
              <form onSubmit={this.handleSubmit}>
                <h4>{info.company_name}</h4>
                <p>
                  Date:{' '}
                  <input
                    required
                    aria-label="date"
                    type="date"
                    name="date"
                    onChange={(e) => this.setState({ date: e.target.value })}
                  />
                </p>
                <p>
                  Client:
                  <input
                    required
                    aria-label="client"
                    type="text"
                    name="client"
                    onChange={(e) => this.setState({ client: e.target.value })}
                  />
                </p>
                <input
                  aria-label="next"
                  className="invoive-btn"
                  type="submit"
                  value="Next"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    ) : (
      <div className="NewInvoice">
        <ReviewInvoice
          key={this.state.invoiceId}
          id={this.state.invoiceId}
          items={this.state.items}
          client={this.state.client}
          date={this.state.date}
          total={this.state.total}
          back={this.handleReview}
          {...this.props}
        />
      </div>
    );
  }
}
