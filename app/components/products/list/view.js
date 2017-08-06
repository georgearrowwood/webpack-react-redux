import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Products extends Component {
  // constructor () {
  //   super()
  //   this.renderProduct = this.renderProduct.bind(this)
  // }

  renderProduct (product) {
    return (
      <li key={product.id}>
        {product.id} - {product.title} :
        <a href='#' onClick={e => this.props.deleteProductHandler(e, product.id)}
        >X</a>
      </li>
    )
  }
  render () {
    return (
      <div>
        List:
        <ul>
          {JSON.stringify(this.props)}
          {this.props.products ? this.props.products.map(this.renderProduct) : ''}
        </ul>
      </div>
    )
  }
}

Products.propTypes = {
  deleteProductHandler: PropTypes.func,
  products: PropTypes.array
}

export default Products
