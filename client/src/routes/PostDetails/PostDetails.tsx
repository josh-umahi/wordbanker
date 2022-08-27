import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Skeleton } from "@mui/material";

import useStyles from "./styles";
import { getPost } from "../../actions/posts";
import PostExpanded from "../../components/PostExpanded/PostExpanded";
import capitalizeSentence from "../../utils/capitalizeSentence";

const arrayOf1To5 = [1, 2, 3, 4, 5];

const PostDetails = () => {
  const classes = useStyles();
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
    ["postDetails", id],
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
    <div className={classes.container}>
      <PostExpanded post={post} isLoading={isLoading} />
      <div className={classes.moreWordsDiv}>
        <Typography className={classes.moreWordsTitle}>More Words</Typography>
        <div className={classes.wordButtonsDiv}>
          {recommendedPosts
            ? recommendedPosts.map((post: any) => (
                <button
                  className={classes.wordButton}
                  key={post._id}
                  onClick={() => navigate(`/posts/${post._id}`)}
                >
                  <Typography className={classes.wordTypography}>
                    {post.word}
                  </Typography>
                </button>
              ))
            : arrayOf1To5.map((_, index) => (
                <Skeleton
                  key={index}
                  className={classes.wordButtonSkeleton}
                  width="135px"
                  height="30px"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
