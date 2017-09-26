import { reduxForm, Field } from 'redux-form';
import {withRouter} from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { loginAction } from './actions';

// const handleSubmit = (data, dispatch) => {
//   console.log('l', data);
//   // dispatch(addProduct(data.title));
// };

const showErrorMessage = (errorMessage) => {
  console.log('erl', errorMessage);
  if (errorMessage) {
    return (
      <div className="info-red">
        {errorMessage}
      </div>
    );
  }
  return '';
};

const submit = (log, hist) => (values) => {
  console.log('555', values, hist);
  
    log(values, hist);
  }

const LoginFormView = (props) => {
  console.log('props', props);
  
  const { handleSubmit, loginAction, errorMessage , history } = props;
  return (<div className="form">
    <h2>Login</h2>
    {showErrorMessage(errorMessage)}
    <form onSubmit={handleSubmit(submit(loginAction, history))}>
      <Field
        name="login"
        component="input"
        type="text"
        placeholder="Login"
      />
      <Field
        name="password"
        component="input"
        type="password"
        placeholder="Password"
      />
      <button type="submit" className="blue">Sign In</button>
    </form>
  </div>
  );
};

// LoginFormView.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string,
// };

// LoginFormView.defaultProps = {
//   errorMessage: '',
// };

function mapStateToProps(state) {
  console.log('map st au', state);
  return { errorMessage: state.auth.errorMessage || null };
}

let LoginForm = withRouter(connect(mapStateToProps, { loginAction })(LoginFormView))

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);


