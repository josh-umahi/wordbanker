import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';
import ModalForm from "./ModalForm";
import initialPostData from "./constants";

const CreatePostModalForm = ({ createPostModalIsOpen, closeCreateModal }) => {
    const [postData, setPostData] = useState(initialPostData);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
        clear()
        closeCreateModal()
    }

    const handleSetPostData = (value) => {
        setPostData(value)
    }

    const clear = () => {
        setPostData(initialPostData)
    }

    const onClose = () => {
        clear()
        closeCreateModal()
    }

    return (
        <ModalForm
            formTitle="Creating a New Post"
            open={createPostModalIsOpen}
            onClose={onClose}
            postData={postData}
            setPostData={handleSetPostData}
            handleSubmit={handleSubmit}
            clear={clear}
        />
    );
};

export default CreatePostModalForm;
