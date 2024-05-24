import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, DialogContent } from '@mui/material';
import { styled } from '@mui/system';

import DeleteModal from '../DeleteModal/DeleteModal';
import EditPostModalForm from '../Forms/EditPostModalForm';
import { useAppContext } from '../../context/AppContext';
import { Post } from '../../../types/Post';

type Props = {
  post: Post;
};

const MoreOptionsButton = styled(Button)({
  color: 'black',
  padding: '0.5em',
  minHeight: 0,
  minWidth: 0,
});

const MoreOptions: React.FC<Props> = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [editPostModalIsOpen, setEditPostModalIsOpen] = useState(false);
  const [deletePostModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const { user } = useAppContext()! || {};
  const postWord = post.word;

  const openEditModal = () => setEditPostModalIsOpen(true);
  const closeEditModal = () => setEditPostModalIsOpen(false);

  const openDeleteModal = () => setDeleteModalIsOpen(true);
  const closeDeleteModal = () => setDeleteModalIsOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEdit = () => {
    openEditModal();
    handleClose();
  };

  const handleClickDelete = () => {
    openDeleteModal();
    handleClose();
  };

  if (user?.result?._id === post?.creator) {
    return (
      <div>
        <MoreOptionsButton variant='text' onClick={handleClickOpen}>
          <MoreHorizIcon fontSize='medium' />
        </MoreOptionsButton>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Select an Option</DialogTitle>
          <DialogContent dividers style={{ margin: 0, padding: 0 }}>
            <List>
              <ListItem button onClick={handleClickEdit}>
                <ListItemText>{`Edit "${postWord}"`}</ListItemText>
              </ListItem>
              <ListItem button onClick={handleClickDelete}>
                <ListItemText>{`Delete "${postWord}"`}</ListItemText>
              </ListItem>
            </List>
          </DialogContent>
        </Dialog>
        <EditPostModalForm
          currentPostData={post}
          editPostModalIsOpen={editPostModalIsOpen}
          closeEditModal={closeEditModal}
        />
        <DeleteModal
          postWord={postWord}
          postId={post._id!}
          deletePostModalIsOpen={deletePostModalIsOpen}
          closeDeleteModal={closeDeleteModal}
        />
      </div>
    );
  }
  return null;
};

export default MoreOptions;
