import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import config from '../config';
import Routes from '../../app/routes';
import reducers from '../../app/reducers';
import loadPreState from '../modules/load-pre-state';

const appController = {
  init: async (req, res) => {
    const preState = await loadPreState(req.url);
    const store = createStore(reducers, preState, applyMiddleware(thunk));

    const context = {};
    const pageBody = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>,
    );

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
