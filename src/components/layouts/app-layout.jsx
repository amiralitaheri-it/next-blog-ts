import React from 'react';

import PropTypes from "prop-types";

import Header from "@/components/app/header";
import Footer from "@/components/app/footer";

function AppLayout({children}) {
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

AppLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default React.memo(AppLayout);