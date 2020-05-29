import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { InvoiceProvider } from './context/InvoiceAssist';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <InvoiceProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InvoiceProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
