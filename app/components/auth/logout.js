import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from './actions';

class LogOut extends Component {
  componentWillMount() {
    this.props.logoutUser();
  }
  render() {
    return null;
  }
}

LogOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(LogOut);
