import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../../routes/Login/Login';
//import SignUpPage from '../routes/SignUpPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import Home from '../../routes/Home/Home';
import AddInvoice from '../../routes/AddInvoice/AddInvoice';
import Account from '../../routes/Account/Account';
import NotFound from '../../routes/NotFound/NotFound';
import PrivateRoute from '../../services/PrivateRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route path="/" component={Header} />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path={'/signup'} component={SignUpPage} /> */}
          <Route path={'/login'} component={Login} />
          <PrivateRoute exact path={'/dashboard'} component={Dashboard} />
          <Route path={'/add-invoice'} component={AddInvoice} />
          <Route path={'/account'} component={Account} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
