import { NavLink } from 'react-router-dom';
import React from 'react';

export default () => (
  <nav>
    <NavLink exact to="/" > home </NavLink>
    <NavLink to="/about"> about </NavLink>
    <NavLink to="/products"> products </NavLink>
  </nav>
);
