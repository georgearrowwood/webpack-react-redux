import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from './main';

const getLayoutByName = (name) => {
  switch (name) {
    case 'main':
    default:
      return MainLayout;
  }
};

const LayoutContainer = ({ name, children }) => {
  // console.log('pp', children, typeof children);
  const Layout = getLayoutByName(name);
  return <Layout>{children}</Layout>;
};

LayoutContainer.propTypes = {
  children: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
};

export default LayoutContainer;
