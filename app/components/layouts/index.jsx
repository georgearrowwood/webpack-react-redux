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
  const Layout = getLayoutByName(name);
  return <Layout>{children}</Layout>;
};

LayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default LayoutContainer;
