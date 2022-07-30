import React, {useCallback, useState} from 'react';
import {useRouter} from "next/router";

import {useDispatch} from "react-redux";
import {TrashIcon} from "@heroicons/react/solid";
import PropTypes from "prop-types";

import {deleteArticleFromService} from "@/services/article-service";
import {deleteArticle} from "@/store/slices/article-slice";
import {sweetAlert} from "@/helpers/helpers";
import {setLoading} from "@/store/slices/loading-slice";
import Delete from "@/components/ui/modals/delete";

function DeleteModal({articleId}) {
    const [showDeleteModal, setDeleteModal] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();

    let deleteHandler = useCallback(async () => {
        dispatch(setLoading(true));

        setDeleteModal(false);

        try {
            await deleteArticleFromService(articleId);

            dispatch(deleteArticle(articleId));
            dispatch(setLoading(false));
            sweetAlert('کاربر موردنظر با موفقیت حذف شد');
            await router.push('/admin-panel/articles');
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
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

DeleteModal.propTypes = {
    articleId: PropTypes.number.isRequired
}

export default React.memo(DeleteModal);