import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="appContentWrapper">
    <div className="appContent">
      {children}
    </div>
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;