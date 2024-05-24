import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Skeleton } from '@mui/material';
import { styled } from '@mui/system';
import { getPost } from '../../actions/posts';
import PostExpanded from '../../components/PostExpanded/PostExpanded';
import capitalizeSentence from '../../utils/capitalizeSentence';

const arrayOf1To5 = [1, 2, 3, 4, 5];

const Container = styled('div')({
  paddingTop: '1em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const MoreWordsDiv = styled('div')({
  backgroundColor: 'white',
  margin: '1.75em 0',
  padding: '0 1em',
  width: '80%',
  borderTop: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const MoreWordsTitle = styled(Typography)({
  paddingTop: '1.25em',
  fontFamily: "'Times New Roman', serif",
  fontWeight: 'bold',
  fontSize: '16px',
});

const WordButtonsDiv = styled('div')({
  width: '100%',
  padding: '1.5em 0 1.5em',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
});

const WordButton = styled('button')({
  margin: '0 1em 0.5em',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#8C8E90',
    cursor: 'pointer',
  },
});

const WordButtonSkeleton = styled(Skeleton)({
  margin: '0 1em 0.5em',
});

const WordTypography = styled(Typography)({
  color: '#8C8E90',
  fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
  fontWeight: 400,
  fontSize: '18px',
});

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  /*
   * - Why is the stale time set to Infinity for "postDetails?
   * Our server side is configured to return a new randomized list
   * of recommendedPosts on every getPost request. This means that
   * if our staleTime is left at 0 there will be stale data left in the
   * recommendedPosts every time we toggle amongst different words in
   * the "More Words" section. This caused a glitchy double-change in
   * the view giving users an unpleasant experience.
   */
  const { data, isLoading } = useQuery(
    ['postDetails', id],
    () => getPost(id!),
    { staleTime: Infinity }
  );

  let post: any, recommendedPosts: any;
  if (data) {
    post = data.post;
    recommendedPosts = data.recommendedPosts;
  } else {
    post = null;
    recommendedPosts = null;
  }

  useEffect(() => {
    if (post) {
      document.title = `Wordbanker - \"${capitalizeSentence(
        post.word
      )}\" Definition`;
    }
  }, [post]);

  return (
    <Container>
      <PostExpanded post={post} isLoading={isLoading} />
      <MoreWordsDiv>
        <MoreWordsTitle>More Words</MoreWordsTitle>
        <WordButtonsDiv>
          {recommendedPosts
            ? recommendedPosts.map((post: any) => (
                <WordButton
                  key={post._id}
                  onClick={() => navigate(`/posts/${post._id}`)}
                >
                  <WordTypography>{post.word}</WordTypography>
                </WordButton>
              ))
            : arrayOf1To5.map((_, index) => (
                <WordButtonSkeleton key={index} width='135px' height='30px' />
              ))}
        </WordButtonsDiv>
      </MoreWordsDiv>
    </Container>
  );
};

export default PostDetails;
