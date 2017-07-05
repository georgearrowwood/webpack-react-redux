import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import config from '../config'
import Routes from '../../../app/routes'
import reducers from '../../../app/reducers/products'

let router = express.Router()
const store = createStore(reducers)

router.get('*', (req, res) => {
  const context = {}
  const pageBody = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  res.render('index', {
    pageBody: pageBody,
    title: config.title,
    scriptUrl: config.scriptUrl,
    styleUrl: config.styleUrl
  })
})

module.exports = router
