import React from 'react';
import PropTypes from 'prop-types';

import { StarIcon } from '@heroicons/react/24/outline';

function Card({ title, description, img, fuels, isFavorite, toggleFavoriteFunc }) {
    // const imagePath = `/assets/images/${img}`;
    // const image = require(imagePath);

    const favIcon = () =>
        isFavorite ? (
            <button
                type="submit"
                className="absolute top-0 right-0 mr-2 mt-2"
                onClick={(e) => toggleFavoriteFunc(e)}
            >
                <StarIcon className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            </button>
        ) : (
            <button
                type="submit"
                className="absolute top-0 right-0 mr-2 mt-2"
                onClick={(e) => toggleFavoriteFunc(e)}
            >
                <StarIcon className="h-6 w-6 text-yellow-500" />
            </button>
        );

    const haveImage = () =>
        img === '' ? <> </> : <img className="w-full" src={img} alt={`${title} preview`} />;

    const haveFuels = () => {
        return fuels.length === 0 ? null : (
            <div className="px-6 pt-4 pb-2">
                {fuels?.map((e) =>
                    e?.name === undefined ? null : (
                        <span
                            key={`${e?.name}${e?.price}${Number(Math.random()).toString(16)}`}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                            {e?.name} - {e?.price} €
                        </span>
                    ),
                )}
            </div>
        );
    };

    return (
        <div
            key={Number(Math.random()).toString(16)}
            className="relative rounded overflow-hidden shadow-lg dark:bg-slate-800 dark:shadow-md"
        >
            {favIcon()}
            {haveImage()}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-indigo-300 ">{title}</div>
                <p className="text-gray-700 text-base dark:text-slate-400 ">{description}</p>
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
