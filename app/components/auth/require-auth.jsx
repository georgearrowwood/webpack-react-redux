import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      console.log('auwm', this.props.authenticated);
      if (!this.props.authenticated) {
        console.log('wpl', this.props, this);
        this.props.history.push('/login');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        console.log('wuu');
        this.props.history.push('/login');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    console.log('sstat', state);
    return ({ authenticated: state.auth.authenticated });
  }

  return connect(mapStateToProps)(RequireAuth);
};
