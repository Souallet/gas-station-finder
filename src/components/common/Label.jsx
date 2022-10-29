import React from 'react';
import PropTypes from 'prop-types';

function Label({ labelText, forAttribute }) {
    return (
        <label
            htmlFor={forAttribute}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
            {labelText}
        </label>
    );
}

Label.propTypes = {
    labelText: PropTypes.string.isRequired,
    forAttribute: PropTypes.string,
};

Label.defaultProps = {
    forAttribute: '',
};

export default Label;
