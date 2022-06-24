import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import PostExpanded from '../PostExpanded/PostExpanded';

const WordOfTheDay = () => {
    const posts = useSelector(state => state.posts)
    const wordOfTheDayPost = posts[0]

    return (
        !posts.length ? <CircularProgress /> : <PostExpanded post={wordOfTheDayPost} />
    )
}

export default WordOfTheDay