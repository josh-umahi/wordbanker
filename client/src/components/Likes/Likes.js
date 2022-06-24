import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import useStyles from './styles';
import { likePost } from '../../actions/posts';

const Likes = ({ post, leftAlign }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post.likes)
    const postId = post._id
    const userId = user?.result?._id;

    const hasLikedPost = () => post.likes.find((like) => like === userId);

    const LikesIcon = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? <ThumbUpAltIcon color='inherit' fontSize='small' />
                : <ThumbUpAltOutlined color='inherit' fontSize='small' />
        }

        return <ThumbUpAltOutlined color='inherit' fontSize='small' />
    }

    const handleLike = (e) => {
        e.preventDefault();

        if (user === null) {
            navigate('/auth')
        } else {
            dispatch(likePost(postId))

            if (hasLikedPost()) {
                setLikes(post.likes.filter((id) => id !== userId));
            } else {
                setLikes([...post.likes, userId]);
            }
        }
    }

    return (
        <div className={classes.likesContainer}
            style={{
                justifyContent: leftAlign ? "flex-start" : "center"
            }}
        >
            <Button
                className={classes.likesButton}
                disableTouchRipple size="small"
                onClick={handleLike}
            >
                <LikesIcon />
            </Button>
            <h4 className={classes.likesLabel} >{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</h4>
        </div>
    )
}

export default Likes