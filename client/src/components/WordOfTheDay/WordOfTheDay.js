import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import PostExpanded from '../PostExpanded/PostExpanded';
import formatDate from '../../utils/formatDate';
import wotdPostIds from '../../constants/wotdPostIds';
import { getWordOfTheDayPost } from '../../actions/posts';

const WordOfTheDay = () => {
    const { wordOfTheDayPost } = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const todaysDate = new Date()
    const todaysDateFormatted = formatDate(todaysDate)

    useEffect(() => {
        const dayOfMonth = todaysDate.getDate();
        const postIdIndex = dayOfMonth - 1
        const postId = wotdPostIds[postIdIndex]

        dispatch(getWordOfTheDayPost(postId));
    }, [])

    return (
        <PostExpanded post={wordOfTheDayPost} todaysDate={todaysDateFormatted} />
    )
}

export default WordOfTheDay