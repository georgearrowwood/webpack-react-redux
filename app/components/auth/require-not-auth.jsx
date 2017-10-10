import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (AuthedComponent) => {
  class RequireNotAuth extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <AuthedComponent {...this.props} />;
    }
  }

  RequireNotAuth.propTypes = {
    authenticated: PropTypes.bool,
    history: PropTypes.shape().isRequired,
  };

  RequireNotAuth.defaultProps = {
    authenticated: false,
  };

  const mapStateToProps = state =>
    ({ authenticated: state.auth.authenticated });

  return connect(mapStateToProps)(RequireNotAuth);
};
