import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import cookie from 'react-cookies';

import routes from './routes';

import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);

const userToken = cookie.load('userToken');
if (userToken) {
  store.dispatch({ type: 'AUTHENTICATED' });
}

const App = (Routes, Store, History) => (
  <Provider store={Store}>
    <ConnectedRouter history={History}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);
/* eslint-env browser */
render(App(routes, store, history), document.getElementById('root'));
/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default;
    render(
      App(NextRoutes, store, history),
      document.getElementById('root'),
    );
  });
}

