import React, {useState} from "react";

import HeaderAuthButtons from "@/components/app/header-auth-buttons";
import Logo from "@/components/app/logo";
import BurgerMenu from "@/components/app/burger-menu";
import NavLink from "@/components/ui/sections/nav-link";

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

    const links = [
        {route: '/', label: 'Home'},
        {route: '/articles', label: 'Articles'},
        {route: '/about-us', label: 'About us'},
        {route: '/contact-us', label: 'Contact us'},
        {route: '/auth/login', label: 'Login'},
        {route: '/auth/register', label: 'Register'},
    ];

    return (
        <nav className="bg-white border-gray-200 mt-3 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 top-10 grid place-items-center">
            <div className="container flex flex-wrap justify-between items-center mx-auto relative border p-3 rounded-md border-blue-900">
                <span className='flex gap-8'>
                    <Logo label="Amir Ali Taheri"/>
                    <span className='flex mt-1'>
                        <HeaderAuthButtons/>
                    </span>
                </span>
                <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>

                <div className={
                    burgerMenu
                        ? "w-full md:block md:w-auto transition duration-200"
                        : "hidden w-full md:block md:w-auto"
                }>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium px-3 transition duration-200">

                        <NavLink links={links}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Header);