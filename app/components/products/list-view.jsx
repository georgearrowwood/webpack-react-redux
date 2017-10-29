import React from 'react';
import PropTypes from 'prop-types';

const deleteProduct = (e, id, handler) => {
  e.preventDefault();
  handler(id);
};

const ProductsListView = ({ products, deleteHandler }) => (
  <ul>
    { products.map(product => (
      <li key={product.id}>
        <span>{product.id} - {product.title} :</span>
        <a
          href="delete/{product.id}"
          onClick={e => deleteProduct(e, product.id, deleteHandler)}
        >X</a>
      </li>
    ))}
  </ul>
);

ProductsListView.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsListView.defaultProps = {
  products: [],
};

export default ProductsListView;
