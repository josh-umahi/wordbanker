import React, { forwardRef, useRef, useState } from "react";
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
import { Post } from "../../../types/Post";

const imageFileRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

type Props = {
  open: boolean;
  onClose: () => void;
  handleSubmit: (postData: any) => void;
  postData: Post;
  setPostData: (value: Post)=> void;
  isCreate?: boolean;
  clear: () => void;
  formTitle: string;

}

const checkIfPostDataEmpty = (postData: Post) => {
  let postObjKeys = Object.keys(initialPostData) as Array<keyof Post>;
    // Loose equality used here to catch empty and whitespace-filled strings
    const postDataIsEmpty = postObjKeys.some((key)=> {
      return postData[key] === initialPostData[key]
      })
    return postDataIsEmpty;
}

const ModalForm: React.FC<Props> = ({ formTitle, open, onClose, postData, setPostData, handleSubmit, clear, isCreate }) => {
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);
  const imageNameRef = useRef<HTMLLabelElement>(null);
  const classes = useStyles();

  const submitForm = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
   let postDataIsEmpty = checkIfPostDataEmpty(postData);

    if (postDataIsEmpty) {
      setErrorOnSubmit(true)
    } else {
      imageNameRef.current!.innerHTML = ""
      const trimmedPostData = getTrimmedPostData()
      handleSubmit(trimmedPostData)
    }
  }

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let target = e.target as HTMLInputElement;
    const file = target.files?.item(0); // More type-safe than target.files[0]

    if (file && imageFileRegex.test(file.name)) {
      imageNameRef.current!.innerHTML = file.name

      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result
        setPostData({ ...postData, selectedFile: base64 })
      }
    } else {
      imageNameRef.current!.innerHTML = ""
      setPostData({ ...postData, selectedFile: "" })
    }
  }

  const getTrimmedPostData = () => {
    const trimmedPostData: Partial<Post> = {}

    for (var key in postData) {
      const value = postData[(key as keyof Post)]
      if (typeof value === 'string' && key !== "selectedFile") {
        trimmedPostData[(key as keyof Post)] = value.trim();
      } else {
        trimmedPostData[(key as keyof Post)] = value
      }
    }
  }
  

  return (
    <Dialog
      disableScrollLock
      open={open}
      onClose={onClose}
      classes={{ root: classes.dialogWrapperRoot, paper: classes.dialogWrapper }}
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
              {/*@ts-ignore*/}
              <Input id="button-file-uploader" style={{ display: "none" }} type="file" multiple={false} accept="image/*" onChange={handleChangeFile} />
              <Button variant="outlined" component="span">
                {postData.selectedFile == false ? "Upload Image" : "Replace Image"}
              </Button>
            </label>
            <label ref={imageNameRef} />
          </div>
          {errorOnSubmit && <Typography variant="button" className={classes.errorText}>** Please fill the form and upload an image</Typography>}
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth onClick={()=> {
            clear()
            imageNameRef.current!.innerHTML = ""
          }}>Clear</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
