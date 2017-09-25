import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import auth from './components/auth/reducers';
import products from './components/products/reducers';

const reducers = combineReducers({
  auth,
  products,
  router: routerReducer,
  form: formReducer,
});

export default reducers;
