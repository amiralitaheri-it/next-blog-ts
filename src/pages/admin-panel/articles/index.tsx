import React, {useEffect} from 'react';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from '@/hooks/redux-hooks';

import {getArticlesFromService} from "@/services/article-service";
import {setArticles} from "@/store/slices/article-slice";
import {setLoading} from "@/store/slices/loading-slice";
import AdminLayout from "@/components/layouts/admin-layout";
import TableHeader from "@/components/ui/sections/table-header";
import Loading from "@/components/ui/sections/loading";
import Item from "@/components/articles/item";

function Index() {
    const dispatch = useAppDispatch();
    const articlesList = useAppSelector((state) => state.articles.list);
    const loading = useAppSelector((state) => state.loading.show);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        dispatch(setLoading(true));
        try {
            let articles = await getArticlesFromService();
            dispatch(setArticles(articles));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
        }
    }

    if (loading) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            <Link href='/admin-panel/articles/create' passHref>
                <button type="button"
                        className="mt-5 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create
                    new article
                </button>
            </Link>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <TableHeader
                    headerFields={['#', 'Title', 'Description', 'Created At', 'Settings']}/>
                <tbody>
                {
                    articlesList?.map((article) => <Item article={article} key={article.id}/>)
                }
                </tbody>
            </table>
        </>
    );
}

export default Index;

Index.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}