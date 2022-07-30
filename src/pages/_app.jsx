import {Provider} from "react-redux";

import MainLayout from '@/components/layouts/app-layout';
import {store} from "store";

import 'styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => <Provider store={store}><MainLayout>{page}</MainLayout></Provider>);

    return (
        getLayout(<Provider store={store}><Component {...pageProps} /></Provider>)
    );
}

export default MyApp;
