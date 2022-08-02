import React, {Dispatch, SetStateAction} from 'react';

import HeaderDashboard from "@/components/dashboard/header-dashboard";
import UserNavigation from "@/interfaces/user-navigation";

interface Props {
    userNavigation: UserNavigation[];
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    classNames: (classes: string[]) => string;
    children: JSX.Element;
}

const MainContent: React.FC<Props> = ({userNavigation, setSidebarOpen, classNames, children}) => {
    return (
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
    );
}

export default React.memo(MainContent);