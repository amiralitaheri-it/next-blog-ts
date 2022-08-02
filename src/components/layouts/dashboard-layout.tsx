import React, {useCallback, useState} from 'react';

import {HomeIcon, UsersIcon,} from '@heroicons/react/outline'

import Sidebar from "@/components/ui/sections/sidebar";
import HeaderDashboard from "@/components/dashboard/header-dashboard";
import UserNavigation from "@/interfaces/user-navigation";
import Navigation from "@/interfaces/navigation";
import {className} from "@/types/global";


const navigation: Navigation[] = [
    {name: 'Home', href: '/dashboard', icon: HomeIcon, current: true},
    {name: 'Profile', href: '/dashboard/profile', icon: UsersIcon, current: false},
]

const userNavigation: UserNavigation[] = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

interface Props {
    children: JSX.Element
}

const DashboardLayout: React.FC<Props> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const classNames: className = useCallback((...classes: string[]): string => {
        return classes.filter(Boolean).join(' ')
    }, []);

    return (
        <>
            <Sidebar navigation={navigation} classNames={classNames} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="md:pl-64 flex flex-col">
                <HeaderDashboard userNavigation={userNavigation} setSidebarOpen={setSidebarOpen} classNames={classNames}/>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-3xl font-semibold text-gray-400">Dashboard</h1>
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

export default React.memo(DashboardLayout);