import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import useStyles from './styles';

const Likes = ({ likeCount, leftAlign }) => {
    const classes = useStyles();
    const [likes, setLikes] = useState(likeCount);

    const LikesIcon = () => {

    }

    const LikesDescription = () => {

    }

    return (
        <div className={classes.likesContainer}
            style={{
                justifyContent: leftAlign ? "flex-start" : "center"
            }}
        >
            <Button className={classes.likesButton} disableTouchRipple size="small" onClick={() => { }}>
                <ThumbUpAltOutlined color='black' fontSize='small' />
            </Button>
            <h4 className={classes.likesLabel} >10 likes</h4>
        </div>
    )
}

export default Likes