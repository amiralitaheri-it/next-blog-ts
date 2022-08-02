import React from 'react';

import Footer from "@/components/app/footer";

interface Props {
    children: JSX.Element
}

const AuthLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <div className='dark:text-gray-400 text-gray-700 grid place-items-center'>
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default React.memo(AuthLayout);