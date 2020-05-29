import config from '../config';
import TokenService from './token-service';

const InvoiceApiService = {
  getInvoices() {
    return fetch(`${config.API_ENDPOINT}`, {
      headers: {
        authorization: `bearer ${TokenService.getToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getItems() {
    return fetch(`${config.API_ENDPOINT}/items`, {
      headers: {
        authorization: `bearer ${TokenService.getToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/products`, {
      headers: {
        authorization: `bearer ${TokenService.getToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getUser() {
    return fetch(`${config.API_ENDPOINT}/user`, {
      headers: {
        authorization: `bearer ${TokenService.getToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postInvoice(client, date) {
    return fetch(`${config.API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify({
        client: client,
        date_created: date,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  updateInvoice(id, client, date, total) {
    return fetch(`${config.API_ENDPOINT}/invoice/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify({
        client: client,
        date_created: date,
        total_sale: total,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteInvoice(id) {
    return fetch(`${config.API_ENDPOINT}/invoice/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
    });
  },
  postItem(invoiceId, productId, qty) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify({
        invoice_id: invoiceId,
        product_id: productId,
        qty: qty,
      }),
    });
  },

  postProduct(descr, price) {
    return fetch(`${config.API_ENDPOINT}/products`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify({
        descr: descr,
        sale_price: price,
      }),
    });
  },
  updateProduct(id, descr, price) {
    return fetch(`${config.API_ENDPOINT}/products/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify({
        descr: descr,
        sale_price: price,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteProduct(id) {
    return fetch(`${config.API_ENDPOINT}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
    });
  },
  updateUser(first_name, last_name, company_name, email) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        company_name: company_name,
        email: email,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default InvoiceApiService;
