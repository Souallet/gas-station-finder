import React from 'react';
import PropTypes from 'prop-types';

function GridLayout({ children }) {
    return (
        <div className="py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
            {children}
        </div>
    );
}

GridLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GridLayout;
