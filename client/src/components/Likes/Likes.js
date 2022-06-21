import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import useStyles from './styles';
import { useAppContext } from "../../context/AppContext";
import { likePost } from '../../actions/posts';

const Likes = ({ post, leftAlign }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentId = post._id
    const likeCount = post.likeCount

    const LikesIcon = () => {

    }

    const handleLike = () => {
        dispatch(likePost(currentId))
    }

    return (
        <div className={classes.likesContainer}
            style={{
                justifyContent: leftAlign ? "flex-start" : "center"
            }}
        >
            <Button className={classes.likesButton} disableTouchRipple size="small"
                onClick={handleLike}
            >
                <ThumbUpAltOutlined color='inherit' fontSize='small' />
            </Button>
            <h4 className={classes.likesLabel} >{likeCount} {likeCount === 19 ? 'Like' : 'Likes'}</h4>
        </div>
    )
}

export default Likes