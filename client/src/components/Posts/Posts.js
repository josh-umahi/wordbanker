import React from 'react'
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post'

const Posts = () => {
    const posts = useSelector(state => state.posts)

    return (
        !posts.length ? <CircularProgress /> :
            <div className="postsContainer">
                {posts?.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
    )
}

export default Posts