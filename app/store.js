import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default function configureStore(routerHistory) {
  const routerMiddlewareInstance = routerMiddleware(routerHistory);
  const store = createStore(
    reducers,
    applyMiddleware(thunk, routerMiddlewareInstance),
  );
  if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = combineReducers({
          ...require('./reducers').default,
          router: routerReducer
        })
        store.replaceReducer(nextRootReducer);
      });
  }
  return store
}
