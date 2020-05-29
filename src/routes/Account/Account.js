import React, { Component } from 'react';
import InvoiceContext from '../../context/InvoiceAssist';
import InvoiceApiService from '../../services/invoice-api-service';
import Info from '../../components/AccountInfo/Info/Info';
import ProductsList from '../../components/AccountInfo/Products/ProductsList';
import './Account.css';

export default class Account extends Component {
  static contextType = InvoiceContext;

  componentDidMount() {
    InvoiceApiService.getUser()
      .then(this.context.setUser)
      .catch(this.context.setError);
    InvoiceApiService.getProducts()
      .then(this.context.setProducts)
      .catch(this.context.setError);
  }
  render() {
    return (
      <div className="Account">
        <Info />
        <ProductsList />
      </div>
    );
  }
}
