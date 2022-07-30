import React, {useCallback, useState} from 'react';

import {HomeIcon, UsersIcon,} from '@heroicons/react/outline'

import Sidebar from "@/components/ui/sections/sidebar";
import HeaderDashboard from "@/components/dashboard/header-dashboard";
import PropTypes from "prop-types";


const navigation = [
    {name: 'Home', href: '/dashboard', icon: HomeIcon, current: true},
    {name: 'Profile', href: '/dashboard/profile', icon: UsersIcon, current: false},
]

const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

function DashboardLayout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const classNames = useCallback((...classes) => {
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

DashboardLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default React.memo(DashboardLayout);