import React from 'react'
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

import Post from './Post'
import { usePostsListedContext } from '../../context/PostsListedContext';

const arrayOf1To6 = [1, 2, 3, 4, 5, 6]

const Posts = () => {
    const { posts, isLoading } = useSelector(state => state.posts)
    const { searchQuery } = usePostsListedContext()

    const renderPosts = () => {
        if (isLoading) {
            return arrayOf1To6.map((_, index) =>
                <div key={index} className="postContainer">
                    <Skeleton variant="rectangular" height="480px" />
                </div>
            )
        } else {
            if (posts.length === 0) {
                return <h4>Unfortunately there are currently no "{searchQuery}" words. Check back later!</h4>
            } else {
                return posts.map(post =>
                    <Post key={post._id} post={post} />
                )
            }
        }
    }

    return (
        <div className="postsContainer">
            {renderPosts()}
        </div>
    )
}

export default Posts