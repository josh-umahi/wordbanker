import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Divider,
  Typography,
  Input,
} from "@material-ui/core";

import useStyles from "./styles";
import initialPostData from "./constants";

const imageFileRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

const ModalForm = ({ formTitle, open, onClose, postData, setPostData, handleSubmit, clear, isCreate }) => {
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);
  const imageNameRef = useRef(null);
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();

    // Loose equality used here to catch empty and whitespace-filled strings
    const postDataIsEmpty = Object.keys(initialPostData).some((key) => postData[key] == false)

    if (postDataIsEmpty) {
      setErrorOnSubmit(true)
    } else {
      imageNameRef.current.innerHTML = ""
      handleSubmit()
    }
  }

  const handleChangeFile = async (e) => {
    const file = e.target.files[0]

    if (file && imageFileRegex.test(file.name)) {
      imageNameRef.current.innerHTML = file.name

      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result
        setPostData({ ...postData, selectedFile: base64 })
      }
    } else {
      imageNameRef.current.innerHTML = ""

      setPostData({ ...postData, selectedFile: "" })
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>{formTitle}</DialogTitle>
      <Divider />
      <DialogContent>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={submitForm}>
          <TextField disabled={!isCreate} name="word" variant="outlined" label="Word" fullWidth value={postData.word} onChange={(e) => setPostData({ ...postData, word: e.target.value })} />
          <TextField name="partOfSpeech" variant="outlined" label="Part of Speech" fullWidth value={postData.partOfSpeech} onChange={(e) => setPostData({ ...postData, partOfSpeech: e.target.value })} />
          <TextField name="definition" variant="outlined" label="Definition" fullWidth multiline minRows={3} value={postData.definition} onChange={(e) => setPostData({ ...postData, definition: e.target.value })} />
          <TextField name="artistName" variant="outlined" label="Artist's Name" fullWidth value={postData.artistName} onChange={(e) => setPostData({ ...postData, artistName: e.target.value })} />
          <TextField name="artistLink" variant="outlined" label="Artist's Website" fullWidth value={postData.artistLink} onChange={(e) => setPostData({ ...postData, artistLink: e.target.value })} />
          <div className={classes.fileInputDiv}>
            <label htmlFor="button-file-uploader" className={classes.fileInput}>
              <Input id="button-file-uploader" style={{ display: "none" }} type="file" multiple={false} accept="image/*" onChange={handleChangeFile} />
              <Button variant="outlined" component="span">
                {postData.selectedFile == false ? "Upload Image" : "Replace Image"}
              </Button>
            </label>
            <label ref={imageNameRef} />
          </div>
          {errorOnSubmit && <Typography variant="button" className={classes.errorText}>** Please fill the form and upload an image</Typography>}
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
