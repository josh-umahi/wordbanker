import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, DialogContent } from '@material-ui/core';

import useStyles from './styles';
import { useAppContext } from '../../context/AppContext';
import DeleteModal from '../DeleteModal/DeleteModal';

const MoreOptions = ({ postId, postWord }) => {
    const classes = useStyles();
    const { changeCurrentId, openEditModal, openDeleteModal } = useAppContext()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        changeCurrentId(postId)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickEdit = () => {
        openEditModal()
        handleClose()
    };

    const handleClickDelete = () => {
        openDeleteModal()
        handleClose()
    };

    return (
        <div>
            <Button className={classes.moreOptionsButton} variant="text" onClick={handleClickOpen}>
                <MoreHorizIcon fontSize="medium" />
            </Button>
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
            <DeleteModal postWord={postWord} />
        </div>
    );
}

export default MoreOptions
