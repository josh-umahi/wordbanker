import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useQuery } from "react-query";

import { Post } from "../../types/Post";
import { getPostsByPage, getPostsBySearch } from "../actions/posts";

type PostsListedContextType = null | {
  posts: Post[] | null;
  numberOfPages: number | undefined;
  isLoading: boolean;
  page: number;
  search: string | null;
  handleSetPage: (page: number) => void;
  handleSetSearch: (value: string | null) => void;
};

export const PostsListedContext = createContext<PostsListedContextType>(null);
export const usePostsListedContext = () => useContext(PostsListedContext);

export const PostsListedContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string | null>(null);

  const getPosts = async ({ queryKey }: any) => {
    const [_, search, page] = queryKey;

    const data = search
      ? await getPostsBySearch(search)
      : await getPostsByPage(page);

    return data;
  };

  const handleSetPage = (value: number) => {
    setPage(value);
  };

  const handleSetSearch = (value: string | null) => {
    setSearch(value);
  };

  /*
   * The third parameter is set to "search ? null : page" so that whenever a search query is
   * passed in, the page parameter is assigned null to maintain consistency and enable us to
   * take advantage of caching
   */
  const { data, isLoading } = useQuery(
    ["postsListed", search, search ? null : page],
    getPosts
  );
  return (
    <PostsListedContext.Provider
      value={{
        posts: data ? data.data : null,
        numberOfPages: data ? data.numberOfPages : null,
        isLoading,
        page,
        search,
        handleSetPage,
        handleSetSearch,
      }}
    >
      {children}
    </PostsListedContext.Provider>
  );
};
