import React from 'react'
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

import Post from './Post'

const arrayOf1To6 = [1, 2, 3, 4, 5, 6]

const Posts = () => {
    const { posts, isLoading } = useSelector(state => state.posts)

    return (
        <div className="postsContainer">
            {
                isLoading ? arrayOf1To6.map((_, index) =>
                    <div key={index} className="postContainer">
                        <Skeleton variant="rectangular" height="400px" />
                    </div>
                ) : posts.map(post =>
                    <Post key={post._id} post={post} />
                )
            }
        </div>
    )
}

export default Posts