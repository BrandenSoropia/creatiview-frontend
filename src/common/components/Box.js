import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node
};

Box.defaultProps = {
  children: null
};

export default Box;
