import { reduxForm, Field } from 'redux-form';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { loginAction } from './actions';

class LoginFormView extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  showErrorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
    return '';
  }

  submit(values) {
    this.props.loginAction(values, this.props.history);
  }

  render() {
    return (
      <div className="form">
        <h2>Login</h2>
        {this.showErrorMessage()}
        <form onSubmit={this.props.handleSubmit(this.submit)}>
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
  }
}

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  loginAction: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

LoginFormView.defaultProps = {
  errorMessage: null,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage || null };
}

const LoginForm = withRouter(connect(mapStateToProps, { loginAction })(LoginFormView));

export default reduxForm({
  form: 'login',
})(LoginForm);
