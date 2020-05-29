import React, { Component } from 'react';

const InvoiceContext = React.createContext({
  info: [],
  products: [],
  invoices: [],
  items: [],
  user: [],
  loggedIn: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  setInvoices: () => {},
  setItems: () => {},
  setProducts: () => {},
  addProduct: () => {},
  setUser: () => {},
});

export default InvoiceContext;

export class InvoiceProvider extends Component {
  state = {
    products: [],
    invoices: [],
    items: [],
    user: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };
  setInfo = (info) => {
    this.setState({ info });
  };
  setInvoices = (invoices) => {
    this.setState({ invoices });
  };

  setItems = (items) => {
    this.setState({ items });
  };
  setProducts = (products) => {
    this.setState({ products });
  };
  addProduct = (product) => {
    this.setState({ ...this.state.products, product });
  };
  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const value = {
      info: this.state.info,
      products: this.state.products,
      invoices: this.state.invoices,
      items: this.state.items,
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      setProducts: this.setProducts,
      addProduct: this.addProduct,
      setInvoices: this.setInvoices,
      setItems: this.setItems,
      setUser: this.setUser,
    };
    return (
      <InvoiceContext.Provider value={value}>
        {this.props.children}
      </InvoiceContext.Provider>
    );
  }
}
