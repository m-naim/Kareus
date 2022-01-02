import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import PrivateRoute from './privateRoute';
import Login from '../pages/login/login';
import App from '../pages/app/App';
import Home from '../pages/home/Home';
import { SessionContextProvider } from '../context/SessionContextProvider';
import Register from '../pages/register/register';

import Watchlists from '../pages/watchlists/Watchlists';
import Predictions from '../pages/predictions/Predictions';
import Portfolios from '../pages/app/Portfolios';

const Routes = (
  <ScopedCssBaseline>
    <Router>
      <SessionContextProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/app">
            <App />
          </PrivateRoute>
          <PrivateRoute path="/predictions">
            <Predictions />
          </PrivateRoute>
          <PrivateRoute path="/watchlists">
            <Watchlists />
          </PrivateRoute>
          <PrivateRoute path="/portfolios">
            <Portfolios/>
          </PrivateRoute>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </SessionContextProvider>
    </Router>
  </ScopedCssBaseline>
);

export default Routes;
