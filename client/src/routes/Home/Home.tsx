import React, { useRef } from 'react'
import { animateScroll as scroll } from "react-scroll";

import useStyles from './styles';
import WordOfTheDay from '../../components/WordOfTheDay/WordOfTheDay';
import BrowseWords from '../../components/BrowseWords/BrowseWords';
import Posts from '../../components/Posts/Posts';
import Paginator from '../../components/Paginator/Paginator';
import { PostsListedContextProvider } from '../../context/PostsListedContext';

const Home = () => {
    const classes = useStyles();
    const refToBrowseWords = useRef<any>(null)
    const scrollToBrowseWords = () => scroll.scrollTo(refToBrowseWords.current!.offsetTop - 20);

    return (
        <div className={classes.outer}>
            <WordOfTheDay />
            {/* <PostsListedContextProvider>
                <div className={classes.postsListing}>
                    <BrowseWords refToBrowseWords={refToBrowseWords} scrollToBrowseWords={scrollToBrowseWords} />
                    <Posts />
                    <Paginator scrollToBrowseWords={scrollToBrowseWords} />
                </div>
            </PostsListedContextProvider> */}
        </div>
    )
}

export default Home