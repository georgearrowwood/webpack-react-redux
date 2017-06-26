import {AppContainer} from 'react-hot-loader';
import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';

const routes = require ('./routes').default;

const store = createStore(reducer);

var container = document.getElementById('app')

render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>  
  </AppContainer>, container)

if (module.hot) {
    module.hot.accept('./routes', () => {
      // key={Date.now()}
      render(<Router history={browserHistory} routes={require('./routes').default} />, container)
    });
}
