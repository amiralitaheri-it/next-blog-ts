import {Provider} from "react-redux";
import {AppContext, AppInitialProps, AppLayoutProps} from 'next/app';
import {ReactNode} from 'react';
import {Router} from "next/router";
import type {NextComponentType} from 'next';

import AppLayout from '@/components/layouts/app-layout';
import {store} from "@/store/index";

import 'react-toastify/dist/ReactToastify.css';
import "nprogress/nprogress.css";
import 'styles/globals.css'
import {ToastContainer} from "react-toastify";
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
                                                                                   Component,
                                                                                   pageProps,
                                                                               }: AppLayoutProps) => {
    const getLayout = Component.getLayout || ((page: ReactNode) => <Provider store={store}><AppLayout>{page}</AppLayout><ToastContainer/></Provider>);

    return (
        getLayout(<Provider store={store}><Component {...pageProps} /><ToastContainer/></Provider>)
    );
}

export default MyApp;
