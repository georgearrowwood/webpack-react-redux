import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware} from 'react-router-redux'

import reducers from './reducers/products'

export default function configureStore(routerHistory) {

  const middleware = routerMiddleware(routerHistory)

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(middleware)
  )

  if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers/products', () => {
        const nextRootReducer = combineReducers({
          ...require('./reducers/products').default,
          router: routerReducer
        })
        store.replaceReducer(nextRootReducer);
      });
  }
  return store
}
