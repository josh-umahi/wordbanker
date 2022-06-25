import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress, Typography } from '@material-ui/core';

import { getPost } from '../../actions/posts';
import useStyles from './styles';
import PostExpanded from '../../components/PostExpanded/PostExpanded';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    /* 
        TODO:
        Recommended post logic:  similar to theirs but searches for 
        most recent words of the same partOfSpeech as the selected post. 
        It then renders 5 of them at most. If there are none, it defaults
        to wotd posts
    */

    return !posts.length ? <CircularProgress /> : (
        <div>
            <PostExpanded post={post} />
            <Typography gutterBottom variant="h5">More Words</Typography>
            <Typography gutterBottom variant="h5">affluent</Typography>
            <Typography gutterBottom variant="h5">quintessential</Typography>
        </div>
    )
}

export default PostDetails