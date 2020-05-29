import React, { Component } from 'react';
import InvoiceContext from '../../../context/InvoiceAssist';
import InvoiceApiService from '../../../services/invoice-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Description extends Component {
  static contextType = InvoiceContext;
  handleSubmit = (e) => {
    const { descript } = this.props;
    e.preventDefault();

    InvoiceApiService.deleteProduct(descript.id)
      .then((res) => {
        const filterProducts = this.context.products.filter(
          (descr) => descr.id !== descript.id
        );
        this.context.setProducts(filterProducts);
      })
      .catch(this.context.setError);
  };
  render() {
    const { descript } = this.props;
    return (
      <div className="Description">
        <li>
          <div className="products">Description: {descript.descr}</div>
          <div className="products price">
            {' '}
            Sale Price: ${descript.sale_price}
          </div>
          <button className="delete-btn" onClick={(e) => this.handleSubmit(e)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      </div>
    );
  }
}
