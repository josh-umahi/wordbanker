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
    }, [id, dispatch]);

    const openPost = (id) => {
        navigate(`/posts/${id}`);
    };

    return isLoading
        ? <CircularProgress /> : (
            <div className={classes.container}>
                <PostExpanded post={post} />
                <div className={classes.moreWordsDiv}>
                    <Typography className={classes.moreWordsTitle}>More Words</Typography>
                    <div className={classes.wordButtonsDiv}>
                        {posts.map(post =>
                            <button className={classes.wordButton} key={post._id} onClick={() => openPost(post._id)}>
                                <Typography className={classes.wordTypography}>{post.word}</Typography>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        )
}

export default PostDetails