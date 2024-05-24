import React, { useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { styled } from '@mui/system';

import WordOfTheDay from '../../components/WordOfTheDay/WordOfTheDay';
import BrowseWords from '../../components/BrowseWords/BrowseWords';
import Posts from '../../components/Posts/Posts';
import Paginator from '../../components/Paginator/Paginator';
import { PostsListedContextProvider } from '../../context/PostsListedContext';

const OuterDiv = styled('div')({
  // Add styles if needed
});

const PostsListingDiv = styled('div')({
  backgroundColor: '#f6f5f5',
  padding: '2em 0 4em',
});

const Home = () => {
  const refToBrowseWords = useRef<any>(null);
  const scrollToBrowseWords = () =>
    scroll.scrollTo(refToBrowseWords.current!.offsetTop - 20);

  return (
    <OuterDiv>
      <WordOfTheDay />
      <PostsListedContextProvider>
        <PostsListingDiv>
          <BrowseWords refToBrowseWords={refToBrowseWords} />
          <Posts />
          <Paginator scrollToBrowseWords={scrollToBrowseWords} />
        </PostsListingDiv>
      </PostsListedContextProvider>
    </OuterDiv>
  );
};

export default Home;
