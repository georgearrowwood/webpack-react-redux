import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import config from '../modules/config';
import Routes from '../../app/routes';
import reducers from '../../app/reducers';
import loadPreState from '../modules/load-pre-state';

const appController = {
  init: async (req, res) => {
    const { userToken } = req.cookies;
    const user = req.cookies.user ? JSON.parse(req.cookies.user) : null;
    const preState = await loadPreState(req.url, user, userToken);
    const store = createStore(reducers, preState, applyMiddleware(thunk));
    if (userToken) {
      store.dispatch({ type: 'AUTHENTICATED' });
    }
    const context = {};
    const app = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>);
    const pageBody = ReactDOMServer.renderToString(app);

    res.render('index', {
      pageBody,
      title: config.title,
      scriptUrl: config.scriptUrl,
      styleUrl: config.styleUrl,
      preloadedState: JSON.stringify(preState),
    });
  },
};

export default appController;
