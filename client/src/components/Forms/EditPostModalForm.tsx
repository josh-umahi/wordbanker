import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Post } from "../../../types/Post";

import { updatePost } from "../../actions/posts";
import initialPostData from "./constants";
import ModalForm from "./ModalForm";

type Props = {
  currentPostData: Partial<Post>;
  editPostModalIsOpen: boolean;
  closeEditModal: () => void;
};
const EditPostModalForm: React.FC<Props> = ({
  currentPostData,
  editPostModalIsOpen,
  closeEditModal,
}) => {
  const [postData, setPostData] = useState(currentPostData);
  const dispatch = useDispatch();

  useEffect(() => {
    setPostData(currentPostData);
  }, [editPostModalIsOpen, currentPostData]);

  const handleSubmit = (trimmedPostData: Partial<Post>) => {
    dispatch(updatePost(currentPostData._id, { ...trimmedPostData }));
    closeEditModal();
  };

  const handleSetPostData = (value: Partial<Post>) => {
    setPostData(value);
  };

  const clear = () => {
    setPostData(initialPostData);
  };

  const onClose = () => {
    clear();
    closeEditModal();
  };

  return (
    <ModalForm
      formTitle="Editing Post"
      open={editPostModalIsOpen}
      onClose={onClose}
      postData={postData as Post}
      setPostData={handleSetPostData}
      handleSubmit={handleSubmit}
      clear={clear}
    />
  );
};

export default EditPostModalForm;
