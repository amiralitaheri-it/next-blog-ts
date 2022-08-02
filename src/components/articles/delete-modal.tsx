import React, {useCallback, useState} from 'react';
import {NextRouter, useRouter} from "next/router";

import {useDispatch} from "react-redux";
import {TrashIcon} from "@heroicons/react/solid";

import {deleteArticleFromService} from "@/services/article-service";
import {deleteArticle} from "@/store/slices/article-slice";
import {setLoading} from "@/store/slices/loading-slice";
import Delete from "@/components/ui/modals/delete";
import {deleteHandlerFunc} from "@/types/global";

interface Props {
    articleId: number;
}

const DeleteModal: React.FC<Props> = ({articleId}) => {
    const [showDeleteModal, setDeleteModal] = useState<boolean>(false);

    const router: NextRouter = useRouter();
    const dispatch = useDispatch();

    let deleteHandler: deleteHandlerFunc = useCallback(async () => {
        dispatch(setLoading(true));

        setDeleteModal(false);

        try {
            await deleteArticleFromService(articleId);

            dispatch(deleteArticle(articleId));
            dispatch(setLoading(false));
            await router.push('/admin-panel/articles');
        } catch (error) {
            dispatch(setLoading(false));
        }
    }, [])

    return (
        <>
            <TrashIcon className='h-5 w-5 text-rose-500 hover:text-rose-700 transition duration-200' onClick={() => setDeleteModal(true)}/>
            {showDeleteModal && <Delete deleteHandler={deleteHandler} setDeleteModal={setDeleteModal}/>}
        </>
    )
}

export default React.memo(DeleteModal);