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

    const openPost = (id) => {
        navigate(`/posts/${id}`);
    };

    return isLoading
        ? <CircularProgress /> : (
            <div>
                <PostExpanded post={post} />
                <Typography>More Words</Typography>
                {posts && posts.map(post =>
                    <button key={post._id} onClick={() => openPost(post._id)}>
                        <Typography >{post.word}</Typography>
                    </button>
                )}
            </div>
        )
}

export default PostDetails