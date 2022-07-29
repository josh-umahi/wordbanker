import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import PostExpanded from '../PostExpanded/PostExpanded';
import formatDate from '../../utils/formatDate';
import wotdPostIds from '../../constants/wotdPostIds';
import { getWordOfTheDayPost } from '../../actions/posts';
import { Post } from '../../../types/Post';

type GlobalState = {
    posts: Post[] & {wordOfTheDayPost: Post}
    [x:string]: any
}
const WordOfTheDay = () => {
    // TODO: This is a hack. Refactor typings.
    const { wordOfTheDayPost } = useSelector<GlobalState>(state => state.posts) as GlobalState["posts"]
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