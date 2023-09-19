import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
    const { id, name, options, onChange } = props;

    const displayOptions = () =>
        options.map((o) => (
            <option key={o.value} value={o.value}>
                {o.id}
            </option>
        ));

    return (
        <select id={id} name={name} onChange={onChange}>
            {displayOptions()}
        </select>
    );
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            selected: PropTypes.bool,
        }),
    ).isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
};

Select.defaultProps = {
    onChange: null,
};

export default Select;
