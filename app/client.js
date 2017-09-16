import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Routes from './routes';

import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);

const App = (Routes, store, history) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

render(App(Routes, store, history), document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default
    render(
      App(NextRoutes, store, history),
      document.getElementById('root'),
    )
  })
}
