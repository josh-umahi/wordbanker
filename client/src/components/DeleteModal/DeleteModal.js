import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';

import { useAppContext } from "../../context/AppContext";
import { deletePost } from '../../actions/posts';

const redColorStyle = {color: "red"}

const DeleteModal = ({ postWord }) => {
    const { currentId, deletePostModalIsOpen, closeDeleteModal } = useAppContext();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(currentId))
        closeDeleteModal()
    };

    return (
        <Dialog
            open={deletePostModalIsOpen}
            onClose={closeDeleteModal}
        >
            <DialogTitle>{`Delete "${postWord}"`}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`Are you sure you want to delete "${postWord}"? This action cannot be
                    undone.`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDeleteModal}>No</Button>
                <Button style={redColorStyle} onClick={handleDelete}>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal