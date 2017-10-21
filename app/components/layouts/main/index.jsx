import React from 'react';
import PropTypes from 'prop-types';

import Menu from './menu';

/* eslint global-require: "off" */
// if (process.env.ENV === 'browser') 
require('./style.scss');

const Layout = ({ children }) => (
  <div>
    <Menu />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Layout;
