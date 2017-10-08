import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class RequireNotAuth extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        console.log('wuu');
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }


  const mapStateToProps = state => {
    return ({ authenticated: state.auth.authenticated });
  }

  return connect(mapStateToProps)(RequireNotAuth);
};
