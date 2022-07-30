import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

import PropTypes from "prop-types";

function NavLink({links}) {
    const router = useRouter();

    const currentRoute = router.pathname;

    const defaultClassLink = 'block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    const activeClassLink = 'block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-cyan-300 md:p-0 text-gray-700 dark:text-gray-400';

    return (
        <>
            {
                links?.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link href={link.route}>
                                <a className={currentRoute === link.route
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    {link.label}
                                </a>
                            </Link>
                        </li>
                    );
                })
            }
        </>
    );
}

NavLink.propTypes = {
    links: PropTypes.array,
}

export default React.memo(NavLink);