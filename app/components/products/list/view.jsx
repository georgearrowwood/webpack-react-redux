import React from 'react';
import PropTypes from 'prop-types';

const deleteProduct = (e, id, handler) => {
  e.preventDefault();
  handler(id);
};

const ProductsList = ({ products = [], deleteHandler }) => (
  <ul>
    { products.map(product => (
      <li key={product.id}>
        {product.id} - {product.title} :
        <a
          href="delete/{product.id}"
          onClick={e => deleteProduct(e, product.id, deleteHandler)}
        >X</a>
      </li>
    ))}
  </ul>
);

ProductsList.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(React.PropTypes.object),
};

ProductsList.defaultProps = {
  products: [],
};

export default ProductsList;
