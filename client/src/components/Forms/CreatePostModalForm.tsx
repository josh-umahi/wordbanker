import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../actions/posts';
import ModalForm from "./ModalForm";
import initialPostData from "./constants";
import { useAppContext } from "../../context/AppContext";
import { Post } from "../../../types/Post";

type Props = {
    createPostModalIsOpen: boolean,
    closeCreateModal: () => void
}
const CreatePostModalForm: React.FC<Props> = ({ createPostModalIsOpen, closeCreateModal }) => {
    const [postData, setPostData] = useState(initialPostData);
    const { user } = useAppContext()! || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();
// Partial types are types where all the properties are optional
    const handleSubmit = (trimmedPostData: Partial<Post>) => {
        dispatch(
            createPost({
                ...trimmedPostData,
                username: user?.result?.username
            }, navigate)
        )
        clear()
        closeCreateModal()
    }

    const handleSetPostData = (value: Post) => {
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
