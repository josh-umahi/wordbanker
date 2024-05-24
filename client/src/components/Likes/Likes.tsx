import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import { styled } from '@mui/system';

import { likePost } from '../../actions/posts';
import { useAppContext } from '../../context/AppContext';
import { Post } from '../../../types/Post';

type Props = {
  post: Post;
  leftAlign?: boolean;
};

const LikesContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const LikesButton = styled(Button)({
  color: 'black',
  padding: '0 1em 0 1px',
  minHeight: 0,
  minWidth: 0,
  '&.MuiButtonBase-root': {
    backgroundColor: 'transparent',
  },
});

const LikesLabel = styled('h4')({
  fontStyle: 'normal !important',
});

const Likes: React.FC<Props> = ({ post, leftAlign }) => {
  const [likes, setLikes] = useState(post.likes!);
  const { user } = useAppContext()! || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postId = post._id;
  const userId = user?.result?._id;

  const hasLikedPost = likes.find((like) => like === userId);

  const LikesIcon = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <ThumbUpAltIcon color='inherit' fontSize='small' />
      ) : (
        <ThumbUpAltOutlined color='inherit' fontSize='small' />
      );
    }

    return <ThumbUpAltOutlined color='inherit' fontSize='small' />;
  };

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (user === null) {
      navigate('/auth');
    } else {
      if (hasLikedPost) {
        setLikes(likes.filter((id) => id !== userId));
      } else {
        setLikes([...likes, userId]);
      }

      // dispatch(likePost(postId));
    }
  };

  return (
    <LikesContainer
      style={{
        justifyContent: leftAlign ? 'flex-start' : 'center',
      }}
    >
      <LikesButton disableTouchRipple size='small' onClick={handleLike}>
        <LikesIcon />
      </LikesButton>
      <LikesLabel>
        {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
      </LikesLabel>
    </LikesContainer>
  );
};

export default Likes;
