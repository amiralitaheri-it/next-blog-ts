import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

import {UserCircleIcon} from "@heroicons/react/solid";
import {useDispatch, useSelector} from "react-redux";

import {setLoading} from "@/store/slices/loading-slice";
import {getSingleArticleFromService} from "@/services/article-service";
import Loading from "@/components/ui/sections/loading";
import AdminLayout from "@/components/layouts/admin-layout";
import DeleteModal from "@/components/articles/delete-modal";
import {RootState} from "@/store/index";
import Article from "../../../../interfaces/article";

function Single() {
    const dispatch = useDispatch();

    const router = useRouter();
    const articleId = router.query.id;

    const loading = useSelector((state: RootState) => state.loading.show);

    const [singleArticle, setSingleArticle] = useState<Article>(null);

    useEffect(() => {
        getSingleArticle();
    }, [])

    const getSingleArticle = async () => {
        dispatch(setLoading(true));
        try {
            let user = await getSingleArticleFromService(articleId);
            setSingleArticle(user);
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
        <div
            className="relative flex flex-col gap-20 overflow-x-auto sm:rounded-lg top-52 text-gray-500 dark:text-gray-400 max-w-screen-2xl mx-auto grid place-items-center p-5">
            <div
                className="max-w-lg w-full bg-white px-4 pt-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <UserCircleIcon className="w-20 h-20"/>
                    <h5 className="mb-1 my-2 text-xl font-medium text-gray-900 dark:text-white">{singleArticle?.id}</h5>
                    <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleArticle?.title}</span>
                    <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleArticle?.description}</span>
                    <span
                        className="text-md mt-2 text-gray-500 dark:text-gray-400">{new Date(singleArticle?.createdAt).toLocaleDateString('fa-IR')}</span>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                        <DeleteModal articleId={singleArticle?.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single;

Single.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

export async function getServerSideProps() {
    return {
        props: {},
    };
}