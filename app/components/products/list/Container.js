import { connect } from 'react-redux'
import { compose, lifecycle, branch, renderNothing } from 'recompose';

import Products from './view'

import { fetchProducts } from '../../../actions'

const lifecycleMethods = {
  componentWillMount () {
    this.props.dispatch(fetchProducts())
  }
};

const deleteProductHandler = (e, id) => {
  e.preventDefault();
  productsActions.delete(id);
};

const mapStateToProps = state => {
  return {
    products: state.products ? state.products.items : [],
    isFetching: state.products ? state.products.isFetching : false
  }
}

const isNotLoaded = ({ products }) => !products;

export const enhance = compose(
  connect(mapStateToProps),
  lifecycle(lifecycleMethods),
  branch(isNotLoaded, renderNothing)
);

export default enhance(Products)
