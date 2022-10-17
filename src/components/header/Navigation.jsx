import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppRoutes from '../../config/routes';

function Navigation() {
    const { pathname } = useLocation();

    const displayLinks = (route) => {
        const linkClass =
            route.path === pathname
                ? 'bg-white shadow text-sm flex items-center justify-center w-full rounded py-2 px-4 left-1 text-indigo-600 font-semibold'
                : null;
        return (
            <div key={route.label} className="w-full flex justify-center text-gray-400">
                <Link to={route.path} className={linkClass}>
                    {route.label}
                </Link>
            </div>
        );
    };

    return (
        <div className="w-full max-w-sm flex flex-col mx-auto text-center">
            <div className="relative w-full mt-4 rounded-md border h-14 p-2 bg-gray-200">
                <div className="relative w-full h-full flex items-center">
                    {AppRoutes.map((ar) => displayLinks(ar))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
