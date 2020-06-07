import React, { Component } from 'react';
import InvoiceContext from '../../../context/InvoiceAssist';
import Description from '../Description/Description';
import InvoiceApiService from '../../../services/invoice-api-service';

export default class DescriptionList extends Component {
  state = {
    editInfo: false,
    editDescr: false,
    add: false,
    descr: '',
    sale_price: '',
  };
  static contextType = InvoiceContext;

  submitDescript() {
    const { descr, sale_price } = this.state;
    console.log(descr, sale_price);
    InvoiceApiService.postProduct(descr, sale_price).catch(
      this.context.setError
    );
  }

  renderDescript() {
    const { products } = this.context;
    return products.map((descript) => (
      <Description key={descript.id} descript={descript} />
    ));
  }
  renderAddDescript() {
    return (
      <form>
        <p>
          Description:{' '}
          <input
            aria-label="description"
            type="text"
            onChange={(e) => this.setState({ descr: e.target.value })}
            placeholder="description of product or service"
          />
        </p>
        <p>
          Sale Price: $
          <input
            aria-label="sales_price"
            type="text"
            onChange={(e) => this.setState({ sale_price: e.target.value })}
            placeholder="Sales price"
          />
        </p>
        <button
          onClick={(e) => this.submitDescript(e)}
          type="submit"
          className="button"
        >
          Add
        </button>
        <button
          onClick={(e) => this.setState({ add: false })}
          type="submit"
          className="button"
        >
          Cancel
        </button>
      </form>
    );
  }
  handleAddClick = (e) => {
    e.preventDefault();
    this.setState({ add: true });
  };
  handleAddSubmit = (e) => {
    e.preventDefault();
    InvoiceApiService.postProduct(this.state.descr, this.state.sale_price)
      .then(this.context.addProducts)
      .catch(this.context.setError);
  };
  render() {
    return (
      <div className="DescriptionsList">
        <h4>Products or Services Provided:</h4>
        <div className="products">
          <ul>{this.renderDescript()}</ul>
          <div className="add-form">
            {this.state.add === true ? this.renderAddDescript() : null}
          </div>
        </div>
        <button
          className="button primary"
          onClick={(e) => this.handleAddClick(e)}
        >
          Add Description
        </button>
      </div>
    );
  }
}
