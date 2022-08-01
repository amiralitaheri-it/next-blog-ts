import React from 'react';
import Image from "next/image";
import {NextPage} from "next";

import contactUs from "@/public/images/contact-us.jpg";

const ContactUs: NextPage = () => {
    return (
        <>
            <div className='mt-10 mb-10 text-3xl'>Contact Us</div>
            <Image className='rounded-md' src={contactUs} alt='about us' width='1100'
                   height='512' placeholder='blur'/>
        </>
    );
}

export default React.memo(ContactUs);