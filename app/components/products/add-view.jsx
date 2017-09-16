import React from 'react';
import { Field } from 'redux-form';

const ProductAddForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product title</label>
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
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default ProductAddForm;
