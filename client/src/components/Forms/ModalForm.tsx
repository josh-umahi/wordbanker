import React, { useRef, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Divider,
  Typography,
  Input,
} from '@mui/material';
import { styled } from '@mui/system';
import initialPostData from './constants';
import { Post } from '../../../types/Post';

const imageFileRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;

type Props = {
  open: boolean;
  onClose: () => void;
  handleSubmit: (postData: any) => void;
  postData: Post;
  setPostData: (value: Post) => void;
  isCreate?: boolean;
  clear: () => void;
  formTitle: string;
};

const checkIfPostDataEmpty = (postData: Post) => {
  let postObjKeys = Object.keys(initialPostData) as Array<keyof Post>;
  // Loose equality used here to catch empty and whitespace-filled strings
  const postDataIsEmpty = postObjKeys.some((key) => {
    return postData[key] === initialPostData[key];
  });
  return postDataIsEmpty;
};

const DialogWrapperRoot = styled('div')({
  overflowY: 'scroll',
});

const DialogWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'absolute',
  top: theme.spacing(5),
}));

const FormRoot = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
  '& .MuiInputLabel-root': {
    color: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
}));

const Form = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const FileInputDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const FileInputLabel = styled('label')({
  margin: '10px 6px 10px 0',
});

const ButtonSubmit = styled(Button)({
  margin: '10px 0',
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
});

const ErrorText = styled(Typography)({
  textAlign: 'left',
  color: '#FF114A',
});

const ModalForm: React.FC<Props> = ({
  formTitle,
  open,
  onClose,
  postData,
  setPostData,
  handleSubmit,
  clear,
  isCreate,
}) => {
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);
  const imageNameRef = useRef<HTMLLabelElement>(null);

  const submitForm = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let postDataIsEmpty = checkIfPostDataEmpty(postData);

    if (postDataIsEmpty) {
      setErrorOnSubmit(true);
    } else {
      imageNameRef.current!.innerHTML = '';
      const trimmedPostData = getTrimmedPostData();
      handleSubmit(trimmedPostData);
    }
  };

  const handleChangeFile = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let target = e.target as HTMLInputElement;
    const file = target.files?.item(0); // More type-safe than target.files[0]

    if (file && imageFileRegex.test(file.name)) {
      imageNameRef.current!.innerHTML = file.name;

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result;
        setPostData({ ...postData, selectedFile: base64 });
      };
    } else {
      imageNameRef.current!.innerHTML = '';
      setPostData({ ...postData, selectedFile: '' });
    }
  };

  const getTrimmedPostData = () => {
    const trimmedPostData: Partial<Post> = {};

    for (var key in postData) {
      const value = postData[key as keyof Post];
      if (typeof value === 'string' && key !== 'selectedFile') {
        trimmedPostData[key as keyof Post] = value.trim();
      } else {
        trimmedPostData[key as keyof Post] = value;
      }
    }
  };

  return (
    <Dialog
      disableScrollLock
      open={open}
      onClose={onClose}
      PaperProps={{ component: DialogWrapperRoot }}
    >
      <DialogWrapper>
        <DialogTitle>{formTitle}</DialogTitle>
        <Divider />
        <DialogContent>
          <Form autoComplete='off' noValidate onSubmit={submitForm}>
            <FormRoot>
              <TextField
                disabled={!isCreate}
                name='word'
                variant='outlined'
                label='Word'
                fullWidth
                value={postData.word}
                onChange={(e) =>
                  setPostData({ ...postData, word: e.target.value })
                }
              />
              <TextField
                name='partOfSpeech'
                variant='outlined'
                label='Part of Speech'
                fullWidth
                value={postData.partOfSpeech}
                onChange={(e) =>
                  setPostData({ ...postData, partOfSpeech: e.target.value })
                }
              />
              <TextField
                name='definition'
                variant='outlined'
                label='Definition'
                fullWidth
                multiline
                minRows={3}
                value={postData.definition}
                onChange={(e) =>
                  setPostData({ ...postData, definition: e.target.value })
                }
              />
              <TextField
                name='artistName'
                variant='outlined'
                label="Artist's Name"
                fullWidth
                value={postData.artistName}
                onChange={(e) =>
                  setPostData({ ...postData, artistName: e.target.value })
                }
              />
              <TextField
                name='artistLink'
                variant='outlined'
                label="Artist's Website"
                fullWidth
                value={postData.artistLink}
                onChange={(e) =>
                  setPostData({ ...postData, artistLink: e.target.value })
                }
              />
              <FileInputDiv>
                <FileInputLabel htmlFor='button-file-uploader'>
                  {/*@ts-ignore*/}
                  <Input
                    id='button-file-uploader'
                    style={{ display: 'none' }}
                    type='file'
                    // multiple={false}
                    // accept='image/*'
                    onChange={handleChangeFile}
                  />
                  <Button variant='outlined' component='span'>
                    {postData.selectedFile == false
                      ? 'Upload Image'
                      : 'Replace Image'}
                  </Button>
                </FileInputLabel>
                <label ref={imageNameRef} />
              </FileInputDiv>
              {errorOnSubmit && (
                <ErrorText variant='button'>
                  ** Please fill the form and upload an image
                </ErrorText>
              )}
              <ButtonSubmit
                variant='contained'
                color='primary'
                size='large'
                type='submit'
                fullWidth
              >
                Submit
              </ButtonSubmit>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                fullWidth
                onClick={() => {
                  clear();
                  imageNameRef.current!.innerHTML = '';
                }}
              >
                Clear
              </Button>
            </FormRoot>
          </Form>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
};

export default ModalForm;
