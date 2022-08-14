import React from 'react';
import {NextRouter, useRouter} from "next/router";
import Link from 'next/link';

import {useTranslation} from "react-i18next";

import Navigation from "@/interfaces/navigation";

const NavLink: React.FC = () => {
    const router: NextRouter = useRouter();
    const {t} = useTranslation();

    const currentRoute: string = router.pathname;

    const navigations: Navigation[] = [
        {name: 'home', href: '/'},
        {name: 'articles', href: '/articles'},
        {name: 'about-us', href: '/about-us'},
        {name: 'contact-us', href: '/contact-us'},
        {name: 'login', href: '/auth/login'},
        {name: 'register', href: '/auth/register'},
    ]

    return (
        <>
            {
                navigations.map(({name, href}, index) => (
                    <li key={index}>
                        <Link href={href}>
                            <a className={currentRoute === href
                                ? 'header-nav-item-active'
                                : 'header-nav-item'
                            }>
                                {t(name)}
                            </a>
                        </Link>
                    </li>
                ))
            }
        </>
    );
}

export default React.memo(NavLink);