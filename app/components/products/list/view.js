import React, { Component } from 'react'
import PropTypes from 'prop-types'


const deleteProduct = (e, id, handler) => {
  e.preventDefault();
  handler(id);
};

const ProductsList = ({ products, deleteHandler }) => (
    <ul>
      { products.map(product => (
        <li key={product.id}>
          {product.id} - {product.title} :
          <a href='#' onClick={e => deleteProduct(e, product.id, deleteHandler)}
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
