import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { addProduct } from './actions';

const submit = (data, dispatch) => {
  console.log('subm prod add');
  
  dispatch(addProduct(data));
};

const ProductAddForm = ({ handleSubmit}) => (
  <form onSubmit={handleSubmit(submit)}>
    <div>
      <label htmlFor="title">Product title</label>
      <div>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="Product Title"
        />
      </div>
    </div>
    <div>
      <button type="submit">Submit</button>
      {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </button> */}
    </div>
  </form>
);

ProductAddForm.propTypes = {
  submit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  // pristine: PropTypes.bool.isRequired,
  // reset: PropTypes.func.isRequired,
  // submitting: PropTypes.bool.isRequired,
};



export default reduxForm({ form: 'productAdd' })(ProductAddForm);

