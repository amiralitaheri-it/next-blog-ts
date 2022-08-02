import React from 'react';
import {NextRouter, useRouter} from "next/router";

import LinkInterface from "@/interfaces/link";
import Link from 'next/link';

interface Props {
    links: LinkInterface[]
}

const NavLink: React.FC<Props> = ({links}) => {
    const router: NextRouter = useRouter();

    const currentRoute: string = router.pathname;

    const defaultClassLink: string = 'block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    const activeClassLink: string = 'block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-cyan-300 md:p-0 text-gray-700 dark:text-gray-400';

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

export default React.memo(NavLink);