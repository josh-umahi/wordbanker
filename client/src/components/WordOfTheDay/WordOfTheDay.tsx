import React from "react";
import { useQuery } from "react-query";

import PostExpanded from "../PostExpanded/PostExpanded";
import formatDate from "../../utils/formatDate";
import wotdPostIds from "../../constants/wotdPostIds";
import { getWordOfTheDayPost } from "../../actions/posts";

const WordOfTheDay = () => {
  const todaysDate = new Date();
  const todaysDateFormatted = formatDate(todaysDate);
  const dayOfMonth = todaysDate.getDate();
  const postIdIndex = dayOfMonth - 1;
  const postId = wotdPostIds[postIdIndex];
  const { data, isLoading } = useQuery(["wotdPost", postId], () =>
    getWordOfTheDayPost(postId)
  );

  return (
    <PostExpanded
      post={data ? data.post : null}
      isLoading={isLoading}
      todaysDate={todaysDateFormatted}
    />
  );
};

export default WordOfTheDay;
