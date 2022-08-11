import React from 'react';
import {useRouter} from "next/router";

import {useDispatch} from "react-redux";
import {Form, Formik} from 'formik';
import {toast} from "react-toastify";
import * as yup from 'yup';

import {setLoading} from "@/store/slices/loading-slice";
import {addArticle} from "@/store/slices/article-slice";
import {addArticleFromService} from "@/services/article-service";
import AdminLayout from "@/components/layouts/admin-layout";
import Article from "@/interfaces/article";
import FieldElementForm from "@/components/ui/forms/create-article/field-element";

const Create = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const initialArticle: Article = {
        title: '',
        description: '',
        image: '',
        dataUri: '',
        createdAt: Date.now(),
    }

    let createArticleFormSchema = yup.object().shape({
        title: yup.string().required().min(3).label('title'),
        description: yup.string().required().min(10),
        image: yup.string().required().url(),
        dataUri: yup.string().required().min(8),
    })

    const createArticleSubmitHandler = async (values) => {
        dispatch(setLoading(true));
        if (values) {
            try {
                let newArticle = await addArticleFromService(values);
                dispatch(addArticle(newArticle));
                toast.success('New Article added successfully!');
                dispatch(setLoading(false));
                await router.push('/admin-panel/articles');
            } catch (error) {
                dispatch(setLoading(false));
            }
        }
    }

    return (
        <>
            <Formik
                initialValues={initialArticle}
                validationSchema={createArticleFormSchema}
                onSubmit={createArticleSubmitHandler}
                validateOnChange={false}
            >
                <Form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-400">Create new article</h3>
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                                <FieldElementForm label="Title"
                                                  name="title"
                                                  type="text"
                                                  placeholder="Please enter the title"
                                />
                                <FieldElementForm label="Description"
                                                  name="description"
                                                  as="textarea"
                                                  placeholder="please enter the description"
                                />
                                <FieldElementForm label="Image URL"
                                                  name="image"
                                                  type="text"
                                                  placeholder="please enter the image url"
                                />
                                <FieldElementForm label="Image BlurDataURL"
                                                  name="dataUri"
                                                  type="text"
                                                  placeholder="please enter the image dataUri"
                                />
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>

            </Formik>
        </>
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