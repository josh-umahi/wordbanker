import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../actions/posts';
import ModalForm from "./ModalForm";
import initialPostData from "./constants";
import { useAppContext } from "../../context/AppContext";
import formatLink from "../../utils/formatLink";

const CreatePostModalForm = ({ createPostModalIsOpen, closeCreateModal }) => {
    const [postData, setPostData] = useState(initialPostData);
    const { user } = useAppContext()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(
            createPost({
                ...postData,
                artistLink: formatLink(postData.artistLink),
                username: user?.result?.username
            }, navigate)
        )
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
            isCreate
        />
    );
};

export default CreatePostModalForm;
