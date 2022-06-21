import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';
import { useAppContext } from "../../context/AppContext";
import useStyles from "./styles";

const initialPostData = {
  word: '',
  pronunciation: '',
  partOfSpeech: '',
  definition: '',
  artistName: '',
  artistLink: '',
  selectedFile: ''
}

const ModalForm = ({ typeOfForm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const appContext = useAppContext();
  const { currentId } = appContext;
  const [postData, setPostData] = useState(initialPostData);
  const post = useSelector((state) => (currentId ? state.posts.find((wobArt) => wobArt._id === currentId) : null));

  let open, onClose, actionToDispatch, formTitle;
  if (typeOfForm === "CREATE") {
    open = appContext.createPostModalIsOpen
    onClose = appContext.closeCreateModal
    actionToDispatch = () => dispatch(createPost(postData))
    formTitle = "Creating a New Post"
  }
  if (typeOfForm === "EDIT") {
    open = appContext.editPostModalIsOpen
    onClose = appContext.closeEditModal
    actionToDispatch = () => dispatch(updatePost(currentId, postData))
    formTitle = "Editing a New Post"
  }

  useEffect(() => {
    if (post && typeOfForm === "EDIT") setPostData(post);
  }, [post, typeOfForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionToDispatch()
    clear()
    onClose()
  }

  const clear = () => {
    setPostData(initialPostData)
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        clear()
        onClose()
      }}
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>{formTitle}</DialogTitle>
      <Divider />
      <DialogContent>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="word" variant="outlined" label="Word" fullWidth value={postData.word} onChange={(e) => setPostData({ ...postData, word: e.target.value })} />
          <TextField name="pronunciation" variant="outlined" label="Pronunciation" fullWidth value={postData.pronunciation} onChange={(e) => setPostData({ ...postData, pronunciation: e.target.value })} />
          <TextField name="partOfSpeech" variant="outlined" label="Part of Speech" fullWidth value={postData.partOfSpeech} onChange={(e) => setPostData({ ...postData, partOfSpeech: e.target.value })} />
          <TextField name="definition" variant="outlined" label="Definition" fullWidth multiline minRows={3} value={postData.definition} onChange={(e) => setPostData({ ...postData, definition: e.target.value })} />
          <TextField name="artistName" variant="outlined" label="Artist Name" fullWidth value={postData.artistName} onChange={(e) => setPostData({ ...postData, artistName: e.target.value })} />
          <TextField name="artistLink" variant="outlined" label="Artist Website URL" fullWidth value={postData.artistLink} onChange={(e) => setPostData({ ...postData, artistLink: e.target.value })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
