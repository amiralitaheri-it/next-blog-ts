import React from 'react';

import PropTypes from "prop-types";
import Footer from "@/components/app/footer";

function AuthLayout({children}) {
    return (
        <>
            <div className='dark:text-gray-400 text-gray-700 grid place-items-center'>
                {children}
            </div>
            <Footer/>
        </>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default React.memo(AuthLayout);