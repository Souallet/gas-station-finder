import React from 'react';
import PropTypes from 'prop-types';

function GridLayout({ children }) {
    return <div> {children}</div>;
}

GridLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GridLayout;
