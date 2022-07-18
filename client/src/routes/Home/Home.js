import React from 'react'

import WordOfTheDay from '../../components/WordOfTheDay/WordOfTheDay';
import BrowseWords from '../../components/BrowseWords/BrowseWords';
import Posts from '../../components/Posts/Posts';
import Paginator from '../../components/Paginator/Paginator';
import useStyles from './styles';
import { PostsListedContextProvider } from '../../context/PostsListedContext';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.outer}>
            <WordOfTheDay />
            <PostsListedContextProvider>
                <div className={classes.postsListing}>
                    <BrowseWords />
                    <Posts />
                    <Paginator />
                </div>
            </PostsListedContextProvider>
        </div>
    )
}

export default Home