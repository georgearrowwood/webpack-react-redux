import React from 'react';
import PropTypes from 'prop-types';

import Menu from './menu';

require('./style.css')

const Layout = ({ children }) => (
  <div>
    <Menu />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
