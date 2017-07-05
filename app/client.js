import React from 'react'
import { render } from 'react-dom'

import App from './app'

import { createBrowserHistory } from 'history';
import configureStore from './configureStore'

let history = createBrowserHistory()
const store = configureStore(history)

render(<App store={store} history={history}/>, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    render(
      <NextApp  store={store} history={history} />,
      document.getElementById('root')
    )
  })
}
