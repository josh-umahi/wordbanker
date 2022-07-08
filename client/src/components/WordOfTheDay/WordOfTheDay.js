import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import PostExpanded from '../PostExpanded/PostExpanded';
import formatDate from '../../utils/formatDate';
import wotdPostIds from '../../constants/wotdPostIds';
import { getPost } from '../../actions/posts';

const WordOfTheDay = () => {
    const { post } = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const todaysDate = new Date()
    const todaysDateFormatted = formatDate(todaysDate)

    useEffect(() => {
        const dayOfMonth = todaysDate.getDate();
        const postIdIndex = dayOfMonth - 1
        const postIds = wotdPostIds[postIdIndex]

        dispatch(getPost(postIds));
    }, [])

    return (
        post ? <PostExpanded post={post} todaysDate={todaysDateFormatted} /> : <CircularProgress />
    )
}

export default WordOfTheDay