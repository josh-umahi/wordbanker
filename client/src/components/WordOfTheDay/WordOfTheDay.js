import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import PostExpanded from '../PostExpanded/PostExpanded';
import formatDate from '../../utils/formatDate';

const todaysDate = formatDate(new Date())

const WordOfTheDay = () => {
    const {posts} = useSelector(state => state.posts)
    const wordOfTheDayPost = posts[0]

    return (
        !posts.length ? <CircularProgress /> : <PostExpanded post={wordOfTheDayPost} todaysDate={todaysDate} />
    )
}

export default WordOfTheDay