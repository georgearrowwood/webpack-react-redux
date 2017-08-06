import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ProductsListView from './view'
import { fetchProducts } from '../../../actions'


class ProductsContainer extends Component {
  // constructor () {
  //   super()
  //   this._onChange = this._onChange.bind(this)
  //   console.log('cons',this.props);
  // }

  // static propTypes = {
    // products: PropTypes.array.isRequired,
    // isFetching: PropTypes.bool.isRequired,
    // dispatch: PropTypes.func.isRequired
  // }

  componentDidMount () {
    // console.log('mm1',this.props);
    // const { dispatch} = this.props
    // dispatch(fetchProducts())
  }

  componentWillMount () {
    this.props.dispatch(fetchProducts())
  }



  componentWillReceiveProps(nextProps) {
    // this.props.dispatch(fetchProducts())
  }

  componentWillUnmount () {
    // productsStore.removeChangeListener(this._onChange)
  }

  deleteProductHandler (e, id) {
    e.preventDefault()
    // productsActions.delete(id)
  }

  render () {
    const { items, isFetching} = this.props
    return (
      <ProductsListView
        products={items}
        deleteProductHandler={this.deleteProductHandler}
      />
    )
  }
};

const mapStateToProps = state => {
  return {
    items: state.products ? state.products.items : [],
    isFetching: state.products ? state.products.isFetching : false
  }
}

export default connect(mapStateToProps)(ProductsContainer)
