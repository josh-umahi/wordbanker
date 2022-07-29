import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@mui/material';

import { getPost, clearPostDetails } from '../../actions/posts';
import useStyles from './styles';
import PostExpanded from '../../components/PostExpanded/PostExpanded';

const arrayOf1To5 = [1, 2, 3, 4, 5]

const PostDetails = () => {
    const { post, recommendedPosts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id, dispatch]);

    const openPost = (id) => {
        dispatch(clearPostDetails())
        navigate(`/posts/${id}`);
    };

    return (
        <div className={classes.container}>
            <PostExpanded post={post} />
            <div className={classes.moreWordsDiv}>
                <Typography className={classes.moreWordsTitle}>More Words</Typography>
                <div className={classes.wordButtonsDiv}>
                    {
                        recommendedPosts ? recommendedPosts.map(post =>
                            <button className={classes.wordButton} key={post._id} onClick={() => openPost(post._id)}>
                                <Typography className={classes.wordTypography}>{post.word}</Typography>
                            </button>
                        ) : arrayOf1To5.map((_, index) => <Skeleton key={index} className={classes.wordButtonSkeleton} width="135px" height="30px" />)
                    }
                </div>
            </div>
        </div>
    )
}

export default PostDetails