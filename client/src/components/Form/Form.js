import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

// TODO: We'll remove the 'creatorOfPost' from form after we add the authentication 
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        word: '',
        pronunciation: '',
        partOfSpeech: '',
        definition: '',
        artistName: '',
        artistLink: '',
        selectedFile: '',
        creatorOfPost: '',
    });
    const post = useSelector((state) => (currentId ? state.posts.find((wobArt) => wobArt._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({
            word: '',
            pronunciation: '',
            partOfSpeech: '',
            definition: '',
            artistName: '',
            artistLink: '',
            selectedFile: '',
            creatorOfPost: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;