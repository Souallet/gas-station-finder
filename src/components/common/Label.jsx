import React from 'react';
import PropTypes from 'prop-types';

function Label({ labelText, forAttribute }) {
    return <label htmlFor={forAttribute}>{labelText}</label>;
}

Label.propTypes = {
    labelText: PropTypes.string.isRequired,
    forAttribute: PropTypes.string,
};

Label.defaultProps = {
    forAttribute: '',
};

export default Label;
