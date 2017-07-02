import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router'
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'

import App from './app'
import reducers from './reducers/products'

const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer
  })
)
let b = createBrowserHistory()
const history = syncHistoryWithStore(b, store);

export default class Index extends Component {

  render () {
    console.log(store, history);
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
  }
}
