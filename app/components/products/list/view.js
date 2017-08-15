import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ products, deleteProductHandler }) => (
    <ul>
      { products.map(product => (
        <li key={product.id}>
          {product.id} - {product.title} :
          <a href='#' onClick={e => deleteProductHandler(e, product.id)}
          >X</a>
        </li>
      ))}
    </ul>
);

ProductsList.propTypes = {
  deleteProductHandler: PropTypes.func,
  products: PropTypes.array
}

export default ProductsList
