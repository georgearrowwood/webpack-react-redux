import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import products from './components/products/reducers';

const reducers = combineReducers({
  products,
  router: routerReducer,
  form: formReducer,
});

export default reducers;
