import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        word: '',
        pronunciation: '',
        partOfSpeech: '', 
        definition: '',
        artistName: '',
        selectedFile: '',
        word: '',
        websiteLink: '',
        instagramLink: '',
        youtubeLink: '',
        behanceLink: '',
        dribbbleLink: '',
        facebookLink: '',
        twitterLink: '',
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
            selectedFile: '',
            word: '',
            websiteLink: '',
            instagramLink: '',
            youtubeLink: '',
            behanceLink: '',
            dribbbleLink: '',
            facebookLink: '',
            twitterLink: '',
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
                <Typography variant="h6">{currentId ? `Editing "${post.word}"` : 'Creating a WoB Art'}</Typography>
                <TextField name="word" variant="outlined" label="word" fullWidth value={postData.word} onChange={(e) => setPostData({ ...postData, word: e.target.value })} />
                <TextField name="pronunciation" variant="outlined" label="pronunciation" fullWidth value={postData.pronunciation} onChange={(e) => setPostData({ ...postData, pronunciation: e.target.value })} />
                <TextField name="partOfSpeech" variant="outlined" label="partOfSpeech" fullWidth value={postData.partOfSpeech} onChange={(e) => setPostData({ ...postData, partOfSpeech: e.target.value })} />
                <TextField name="definition" variant="outlined" label="definition" fullWidth value={postData.definition} onChange={(e) => setPostData({ ...postData, definition: e.target.value })} />
                <TextField name="artistName" variant="outlined" label="artistName" fullWidth rows={4} value={postData.artistName} onChange={(e) => setPostData({ ...postData, artistName: e.target.value })} />
                <TextField name="creator" variant="outlined" label="creator" fullWidth rows={4} value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="websiteLink" variant="outlined" label="websiteLink" fullWidth rows={4} value={postData.websiteLink} onChange={(e) => setPostData({ ...postData, websiteLink: e.target.value })} />
                <TextField name="instagramLink" variant="outlined" label="instagramLink" fullWidth rows={4} value={postData.instagramLink} onChange={(e) => setPostData({ ...postData, instagramLink: e.target.value })} />
                <TextField name="youtubeLink" variant="outlined" label="youtubeLink" fullWidth rows={4} value={postData.youtubeLink} onChange={(e) => setPostData({ ...postData, youtubeLink: e.target.value })} />
                <TextField name="behanceLink" variant="outlined" label="behanceLink" fullWidth rows={4} value={postData.behanceLink} onChange={(e) => setPostData({ ...postData, behanceLink: e.target.value })} />
                <TextField name="dribbbleLink" variant="outlined" label="dribbbleLink" fullWidth rows={4} value={postData.dribbbleLink} onChange={(e) => setPostData({ ...postData, dribbbleLink: e.target.value })} />
                <TextField name="facebookLink" variant="outlined" label="facebookLink" fullWidth rows={4} value={postData.facebookLink} onChange={(e) => setPostData({ ...postData, facebookLink: e.target.value })} />
                <TextField name="twitterLink" variant="outlined" label="twitterLink" fullWidth rows={4} value={postData.twitterLink} onChange={(e) => setPostData({ ...postData, twitterLink: e.target.value })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;