import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';


import { addProduct } from './actions';

const submit = (data, dispatch) => {
  dispatch(addProduct(data));
};

const ProductAddForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submit)}>
    <div>
      <label htmlFor="product-title">
        <span>Product title</span>
        <div>
          <Field
            id="product-title"
            name="title"
            component="input"
            type="text"
            placeholder="Product Title"
          />
        </div>
      </label>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
);

ProductAddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'productAdd' })(ProductAddForm);
