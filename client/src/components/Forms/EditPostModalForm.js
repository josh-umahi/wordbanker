import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { updatePost } from '../../actions/posts';
import initialPostData from "./constants";
import ModalForm from "./ModalForm";

const EditPostModalForm = ({ currentPostData, editPostModalIsOpen, closeEditModal }) => {
    const [postData, setPostData] = useState(currentPostData);
    const dispatch = useDispatch();

    useEffect(() => {
        setPostData(currentPostData)
    }, [editPostModalIsOpen, currentPostData])


    const handleSubmit = (trimmedPostData) => {
        dispatch(updatePost(currentPostData._id, { ...trimmedPostData }))
        closeEditModal()
    }

    const handleSetPostData = (value) => {
        setPostData(value)
    }

    const clear = () => {
        setPostData(initialPostData)
    }

    const onClose = () => {
        clear()
        closeEditModal()
    }

    return (
        <ModalForm
            formTitle="Editing Post"
            open={editPostModalIsOpen}
            onClose={onClose}
            postData={postData}
            setPostData={handleSetPostData}
            handleSubmit={handleSubmit}
            clear={clear}
        />
    );
};

export default EditPostModalForm;
