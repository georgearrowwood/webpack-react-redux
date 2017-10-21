import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import isClient from '../../modules/is-client';
import ProductsListView from './list-view';
import { fetchProducts, deleteProduct } from './actions';

class ProductsList extends Component {
  constructor() {
    super();
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentWillMount() {
    if (isClient) this.props.dispatch(fetchProducts());
  }

  deleteHandler(id) {
    this.props.dispatch(deleteProduct(id));
  }

  render() {
    return (<ProductsListView
      products={this.props.products}
      deleteHandler={this.deleteHandler}
    />);
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  products: [],
};

const mapStateToProps = state => ({
  products: state.products.items,
  isFetching: state.products.isFetching,
  auth: state.auth,
});

export default connect(mapStateToProps)(ProductsList);
