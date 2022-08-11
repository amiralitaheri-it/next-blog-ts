import React from 'react';

import Header from "@/components/app/header";
import Footer from "@/components/app/footer";

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({children}) => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className='dark:text-gray-400 text-gray-700 grid place-items-center grow'>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default React.memo(AppLayout);