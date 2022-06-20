import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
export const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [createPostModalIsOpen, setCreatePostModalIsOpen] = useState(false);
  const [editPostModalIsOpen, setEditPostModalIsOpen] = useState(false);
  const [deletePostModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const openCreateModal = () => setCreatePostModalIsOpen(true);
  const closeCreateModal = () => setCreatePostModalIsOpen(false);

  const openEditModal = () => setEditPostModalIsOpen(true);
  const closeEditModal = () => setEditPostModalIsOpen(false);

  const openDeleteModal = () => setDeleteModalIsOpen(true);
  const closeDeleteModal = () => setDeleteModalIsOpen(false);

  const changeCurrentId = (id) => {
    setCurrentId(id)
  }

  return (
    <AppContext.Provider
      value={{
        createPostModalIsOpen,
        openCreateModal,
        closeCreateModal,
        editPostModalIsOpen,
        openEditModal,
        closeEditModal,
        deletePostModalIsOpen,
        openDeleteModal,
        closeDeleteModal,
        currentId,
        changeCurrentId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
