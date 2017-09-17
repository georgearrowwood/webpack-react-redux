import { reduxForm } from 'redux-form';

import ProductAddForm from './add-view';
import { addProduct } from './actions';

const handleSubmit = (data, dispatch) => {
  dispatch(addProduct(data.title));
};

export default reduxForm({
  form: 'productAdd', // a unique identifier for this form
  onSubmit: handleSubmit,
})(ProductAddForm);

