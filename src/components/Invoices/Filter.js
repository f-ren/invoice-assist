import React, { Component } from 'react';
import InvoiceContext from '../../context/InvoiceAssist';
import InvoiceList from '../components/Invoices/InvoiceList';

export default class Filter extends Component {
  static contextType = InvoiceContext;
  state = {
    searchVal: '',
    searchDate: '',
    searchInv: [],
    searchItems: [],
  };
  handleSearch = (e) => {
    e.preventDefault();
    const { invoices, items } = this.context;
    const { searchVal } = this.state;
  };
  formatDate = () => {
    let newDate = new Date(this.state.searchDate);
    let dateString = newDate.toLocaleDateString();
    console.log(dateString);
  };
  render() {
    return (
      <div className="Invoices">
        <div className="filter">
          <form>
            <input
              aria-label="search"
              type="text"
              placeholder="Search..."
              onChange={(e) => this.setState({ searchValue: e })}
            />
            <input
              aria-label="date"
              type="date"
              onChange={(e) => this.setState({ searchDate: e })}
            />
          </form>
        </div>
        <InvoiceList {...this.props} />
      </div>
    );
  }
}
