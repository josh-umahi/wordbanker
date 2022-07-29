import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { getPosts, getPostsBySearch } from "../actions/posts";

type PostsListedContextType = null | {
  page: number | string;
  searchQuery: string| null;
  setPage?: (page: number) => void;
  handleSetSearch: (value: string | null) => void;
  search: string | null;
};
export const PostsListedContext = createContext<PostsListedContextType>(null);
export const usePostsListedContext = () => useContext(PostsListedContext);

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const PostsListedContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState(searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      loadPostsBySearch();
    } else {
      loadPostsByPage();
    }
  }, [search, page, dispatch]);

  const handleSetSearch = (value: string|null) => {
    setSearch(value);
  };

  const loadPostsBySearch = () => {
    dispatch(getPostsBySearch({ search }));
    navigate(`/posts/search?searchQuery=${search || "none"}`);
  };

  const loadPostsByPage = () => {
    dispatch(getPosts(page));
    navigate(`/posts?page=${page}`);
  };

  return (
    <PostsListedContext.Provider
      value={{
        page,
        searchQuery,
        search,
        handleSetSearch,
      }}
    >
      {children}
    </PostsListedContext.Provider>
  );
};
