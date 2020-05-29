import React, { Component } from 'react';
import Items from '../Items/Items';
import InvoiceContext from '../../../context/InvoiceAssist';
import InvoiceApiService from '../../../services/invoice-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Invoices extends Component {
  state = {
    toggle: false,
    confirm: false,
    id: null,
  };
  static contextType = InvoiceContext;
  populateInvoice() {
    const { invoice } = this.props;
    const filterItem = this.context.items.filter(
      (item) => item.invoice_id === invoice.id
    );
    return filterItem.map((item, i) => <Items key={i} item={item} />);
  }
  toggleInvoice = (e) => {
    this.setState((prev) => ({ toggle: !prev.toggle }));
  };

  deleteInvoice = (e) => {
    InvoiceApiService.deleteInvoice(this.state.id)
      .then((res) => {
        const filterInvoices = this.context.invoices.filter(
          (invoice) => invoice.id !== this.state.id
        );
        this.setState({
          confirm: false,
          id: null,
        });
        this.context.setInvoices(filterInvoices);
      })
      .catch(this.context.setError);
  };
  showConfirm = (e) => {
    const { invoice } = this.props;
    this.setState({ confirm: true, id: invoice.id });
  };
  cancelDelete = () => {
    this.setState({ confirm: false, id: null });
  };
  confirmPopup = () => (
    <div className="confirm">
      <div className="popup">
        <div className="content">
          <h2>Confirm Delete</h2>
          <p>Click YES to confirm deletion</p>
          <input
            aria-label="Confirm Delete"
            className="submit"
            type="submit"
            onClick={() => this.deleteInvoice(this.state.id)}
            value="YES"
          />
          <input
            aria-label="Cancel"
            className="submit"
            type="submit"
            onClick={this.cancelDelete}
            value="CANCEL"
          />
        </div>
      </div>
    </div>
  );
  formatDate = (date) => {
    let newDate = new Date(date);
    let dateString = newDate.toDateString();
    return dateString;
  };
  render() {
    const { invoice } = this.props;
    return (
      <div className="Invoices">
        {this.state.confirm && this.confirmPopup()}
        <li className="invoice-ls">
          <div onClick={this.toggleInvoice} className="invoice">
            {invoice.company_name} : {invoice.client} -{' '}
            {this.formatDate(invoice.date_created)} - Total Sale: $
            {invoice.total_sale}
            {this.state.toggle === true && (
              <ul>
                {this.populateInvoice()}
                <button
                  aria-label="Delete"
                  className="delete"
                  type="submit"
                  onClick={(e) => {
                    this.toggleInvoice();
                    this.showConfirm(e);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />{' '}
                </button>
              </ul>
            )}
          </div>
        </li>
      </div>
    );
  }
}
