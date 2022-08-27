import React from "react";
import { Skeleton } from "@mui/material";

import Post from "./Post";
import { usePostsListedContext } from "../../context/PostsListedContext";

const arrayOfSix = [0, 0, 0, 0, 0, 0];

const Posts = () => {
  const { posts, isLoading, search } = usePostsListedContext()!;

  const PostsListed = () => {
    if (isLoading) {
      return arrayOfSix.map((_, index) => (
        <div key={index} className="postContainer">
          <Skeleton variant="rectangular" height="480px" />
        </div>
      ));
    } else {
      if (posts!.length === 0) {
        return (
          <h4>
            Unfortunately there are currently no "{search}" words. Check back
            later!
          </h4>
        );
      } else {
        return posts!.map((post: any) => <Post key={post._id} post={post} />);
      }
    }
  };

  return <div className="postsContainer">{PostsListed()}</div>;
};

export default Posts;
