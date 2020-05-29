import React, { Component } from 'react';
import InvoiceContext from '../../../context/InvoiceAssist';

export default class Items extends Component {
  static contextType = InvoiceContext;

  render() {
    const { item } = this.props;
    return (
      <div className="Items">
        <li>
          Description: {item.descr} - QTY:{item.qty} ${item.sale_price}
        </li>
      </div>
    );
  }
}
