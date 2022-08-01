import React from 'react';
import Image from "next/image";

import aboutUs from '@/public/images/about-us.png'
import {NextPage} from "next";

const AboutUs: NextPage = () => {
    return (
        <>
            <div className='mt-10 mb-10 text-3xl'>About Us</div>
            <Image className='rounded-md' src={aboutUs} alt='about us' width='1100'
                   height='512' placeholder='blur'/>
        </>
    );
}

export default AboutUs;