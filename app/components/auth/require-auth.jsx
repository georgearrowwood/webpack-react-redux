import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (AuthedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/login');
      }
    }
    render() {
      return <AuthedComponent {...this.props} />;
    }
  }

  RequireAuth.propTypes = {
    authenticated: PropTypes.bool,
    history: PropTypes.shape().isRequired,
  };

  RequireAuth.defaultProps = {
    authenticated: false,
  };

  const mapStateToProps = state =>
    ({ authenticated: state.auth.authenticated });

  return connect(mapStateToProps)(RequireAuth);
};
