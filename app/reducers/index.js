import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'


const reducers = combineReducers({
  products,
  router: routerReducer
})

export default reducers
