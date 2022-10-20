import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppRoutes from '../../config/routes';

function Navigation() {
    const { pathname } = useLocation();

    const displayLinks = (route) => {
        const linkClass =
            route.path === pathname
                ? 'bg-white dark:bg-slate-900 shadow text-sm flex items-center justify-center w-full rounded py-2 px-4 left-1 text-indigo-500 dark:text-indigo-300 font-semibold'
                : null;
        return (
            <div
                key={route.label}
                className="w-full flex justify-center text-slate-500 dark:text-slate-400"
            >
                <Link to={route.path} className={linkClass}>
                    {route.label}
                </Link>
            </div>
        );
    };

    return (
        <div className="w-full max-w-sm flex flex-col mx-auto text-center">
            <div className="relative w-full mt-4 rounded-md border h-14 p-2 bg-gray-200 dark:bg-slate-800 dark:border-indigo-300">
                <div className="relative w-full h-full flex items-center">
                    {AppRoutes.map((ar) => displayLinks(ar))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
