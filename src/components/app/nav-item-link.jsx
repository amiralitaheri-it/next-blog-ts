import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function NavItemLink() {
    const router = useRouter();

    const currentRoute = router.pathname;

    const defaultClassLink = 'block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    const activeClassLink = 'block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-cyan-300 md:p-0 text-gray-700 dark:text-gray-400';

    return (
        <>
            <li>
                <Link href='/'>
                    <a className={currentRoute === "/"
                        ? activeClassLink
                        : defaultClassLink
                    }>
                        Home
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/articles'>
                    <a className={currentRoute === "/articles"
                        ? activeClassLink
                        : defaultClassLink
                    }>
                        Articles
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/about-us'>
                    <a className={currentRoute === "/about-us"
                        ? activeClassLink
                        : defaultClassLink
                    }>
                        About us
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/contact-us'>
                    <a className={currentRoute === "/contact-us"
                        ? activeClassLink
                        : defaultClassLink
                    }>
                        Contact us
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/auth/login'>
                    <a className={currentRoute === "/auth/login"
                        ? activeClassLink
                        : defaultClassLink
                    }>
                        Login
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/auth/register'>
                    <a className={currentRoute === "/auth/register"
                        ? activeClassLink
                        : defaultClassLink
                    }>
                        Register
                    </a>
                </Link>
            </li>
        </>
    );
}

export default React.memo(NavItemLink);