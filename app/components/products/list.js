import { connect } from 'react-redux';
import { compose, lifecycle, branch, withHandlers, renderNothing } from 'recompose';

import Products from './list-view';
import { fetchProducts, deleteProduct } from './actions';

const lifecycleMethods = {
  componentWillMount() {
    this.props.dispatch(fetchProducts());
  },
};

const mapStateToProps = state => ({
  products: state.products.items,
  isFetching: state.products.isFetching,
});

const handlers = {
  deleteHandler: props => id => props.dispatch(deleteProduct(id)),
};

const isNotLoaded = ({ products }) => !products;

export const enhance = compose(
  connect(mapStateToProps),
  lifecycle(lifecycleMethods),
  withHandlers(handlers),
  branch(isNotLoaded, renderNothing),
);

export default enhance(Products);
