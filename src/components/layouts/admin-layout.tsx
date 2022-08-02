import React, {useCallback, useState} from 'react';

import {HomeIcon, UsersIcon,} from '@heroicons/react/outline'
import {BookOpenIcon} from "@heroicons/react/solid";

import Sidebar from "@/components/ui/sections/sidebar";
import Header from "@/components/admin-panel/header";
import UserNavigation from "@/interfaces/user-navigation";
import Navigation from "@/interfaces/navigation";
import {className} from "@/types/global";

const navigation: Navigation[] = [
    {name: 'Home', href: '/admin-panel', icon: HomeIcon},
    {name: 'Articles', href: '/admin-panel/articles', icon: BookOpenIcon},
    {name: 'Users', href: '/admin-panel/users', icon: UsersIcon},
]

const userNavigation: UserNavigation[] = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

interface Props {
    children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const classNames: className = useCallback((...classes) => {
        return classes.filter(Boolean).join(' ')
    }, []);

    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} navigation={navigation} classNames={classNames} setSidebarOpen={setSidebarOpen}/>
            <div className="md:pl-64 flex flex-col">
                <Header userNavigation={userNavigation} classNames={classNames} setSidebarOpen={setSidebarOpen}/>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-3xl font-semibold text-gray-400">Admin Panel</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {/* Replace with your content */}
                            {children}
                            {/* /End replace */}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default React.memo(AdminLayout);

