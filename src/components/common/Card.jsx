import React from 'react';
import PropTypes from 'prop-types';

import { StarIcon } from '@heroicons/react/24/outline';

function Card({ title, description, img, fuels, isFavorite, toggleFavoriteFunc }) {
    // const imagePath = `/assets/images/${img}`;
    // const image = require(imagePath);

    const favIcon = () =>
        isFavorite ? (
            <button type="submit" onClick={(e) => toggleFavoriteFunc(e)}>
                <StarIcon />
            </button>
        ) : (
            <button type="submit" onClick={(e) => toggleFavoriteFunc(e)}>
                <StarIcon />
            </button>
        );

    const haveImage = () => (img === '' ? <> </> : <img src={img} alt={`${title} preview`} />);

    const haveFuels = () => {
        return fuels.length === 0 ? null : (
            <div>
                {fuels?.map((e) =>
                    e?.name === undefined ? null : (
                        <span key={`${e?.name}${e?.price}${Number(Math.random()).toString(16)}`}>
                            {e?.name} - {e?.price} €
                        </span>
                    ),
                )}
            </div>
        );
    };

    return (
        <div key={Number(Math.random()).toString(16)}>
            {favIcon()}
            {haveImage()}
            <div>
                <div>{title}</div>
                <p>{description}</p>
            </div>
            {haveFuels()}
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.string,
    fuels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
        }),
    ),
    isFavorite: PropTypes.bool,
    toggleFavoriteFunc: PropTypes.func,
};

Card.defaultProps = {
    description: 'Aucune description',
    img: 'fuel_station.jpg',
    fuels: [],
    isFavorite: false,
    toggleFavoriteFunc: (e) => e.preventDefault(),
};

export default Card;
