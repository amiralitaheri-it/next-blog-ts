import React from 'react';

import Header from "@/components/app/header";
import Footer from "@/components/app/footer";

interface Props {
    children: JSX.Element
}

const AppLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Header/>
            <div className='dark:text-gray-400 text-gray-700 grid place-items-center'>
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default React.memo(AppLayout);