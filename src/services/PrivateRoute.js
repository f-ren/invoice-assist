import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import InvoiceContext from '../context/InvoiceAssist';
import TokenService from './token-service';

export default function PrivateRoute({ component, ...rest }) {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        TokenService.hasToken() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
