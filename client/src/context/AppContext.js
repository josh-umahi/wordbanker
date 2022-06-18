import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const UserInterfaceProvider = ({ children }) => {
  const [createPostModalIsOpen, setCreatePostModalIsOpen] = useState(false);
  const [editPostModalIsOpen, setEditPostModalIsOpen] = useState(false);

  const openCreateModal = () => setCreatePostModalIsOpen(true);
  const closeCreateModal = () => setCreatePostModalIsOpen(false);

  const openEditModal = () => setEditPostModalIsOpen(true);
  const closeEditModal = () => setEditPostModalIsOpen(false);

  return (
    <AppContext.Provider
      value={{
        createPostModalIsOpen,
        openCreateModal,
        closeCreateModal,
        editPostModalIsOpen,
        openEditModal,
        closeEditModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
