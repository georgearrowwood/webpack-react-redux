import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Menu = ({ authenticated }) => (
  <nav>
    <NavLink exact to="/" > home </NavLink>
    <NavLink to="/about"> about </NavLink>
    {authenticated &&
      <NavLink to="/products"> products </NavLink>
    }  
    {!authenticated &&
      <NavLink to="/login"> Login </NavLink>
    }
  </nav>
);

const mapStateToProps = state =>
  ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(Menu);
