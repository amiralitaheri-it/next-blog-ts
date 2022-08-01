import React, {useState} from 'react';
import {useRouter} from "next/router";

import {useDispatch} from "react-redux";

import {setLoading} from "@/store/slices/loading-slice";
import {addArticle} from "@/store/slices/article-slice";
import {addArticleFromService} from "@/services/article-service";
import AdminLayout from "@/components/layouts/admin-layout";
import InputText from "@/components/ui/form/input-text";
import Textarea from "@/components/ui/form/textarea";
import Article from "../../../interfaces/article";

function Create() {
    const dispatch = useDispatch();
    const router = useRouter();

    const initialArticle: Article = {
        title: '',
        description: '',
        image: '',
        dataUri: '',
        createdAt: Date.now(),
    }

    const [article, setArticle] = useState<Article>(initialArticle);

    const createArticleHandler = async (event) => {
        event.preventDefault();
        dispatch(setLoading(true));
        if (article) {
            try {
                let newArticle = await addArticleFromService(article);
                dispatch(addArticle(newArticle));
                setArticle(initialArticle);
                dispatch(setLoading(false));

                await router.push('/admin-panel/articles');
            } catch (error) {
                dispatch(setLoading(false));
            }
        }
    }

    const setArticleItem = (event) => {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={(event) => createArticleHandler(event)}>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-400">Create new article</h3>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <InputText labelName='Title' handler={setArticleItem} nameAttr='title'/>
                        <Textarea labelName='Description' handler={setArticleItem} nameAttr='description'/>
                        <InputText labelName='Image URL' handler={setArticleItem} nameAttr='image'/>
                        <InputText labelName='Image BlurDataURL' handler={setArticleItem} nameAttr='dataUri'/>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Create;

Create.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}