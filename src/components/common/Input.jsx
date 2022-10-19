import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    const { type, id, name, onChange, placeholder, label } = props;
    return (
        <>
            {label !== null && { label }}
            <input
                id={id}
                type={type}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                className="border gray-indigo-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 block w-full pl-10 p-2.5 "
            />
        </>
    );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Input.defaultProps = {
    label: null,
    type: 'text',
    onChange: null,
    placeholder: '',
};
export default Input;
