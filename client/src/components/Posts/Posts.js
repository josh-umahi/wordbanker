import React from 'react'
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post'

const Posts = () => {
    const { posts, isLoading } = useSelector(state => state.posts)

    // TODO: There are currently no “B” words. Check back later!
    if (!posts.length && !isLoading) return 'No posts';

    return (
        isLoading ? <CircularProgress /> :
            <div className="postsContainer">
                {posts?.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
    )
}

export default Posts