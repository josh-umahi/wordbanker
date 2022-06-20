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

const MoreOptions = ({ postId }) => {
    const classes = useStyles();
    const { changeCurrentId, openEditModal } = useAppContext()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickEdit = () => {
        changeCurrentId(postId)
        openEditModal()
        handleClose()
    };

    const handleClickDelete = () => {
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
                            <ListItemText>Edit "trifle"</ListItemText>
                        </ListItem>
                        <ListItem button onClick={handleClickDelete}>
                            <ListItemText>Delete "trifle"</ListItemText>
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default MoreOptions
