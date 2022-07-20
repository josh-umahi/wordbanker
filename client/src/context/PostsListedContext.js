import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";

import { getPosts, getPostsBySearch } from '../actions/posts';

export const PostsListedContext = createContext(null);
export const usePostsListedContext = () => useContext(PostsListedContext);

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export const PostsListedContextProvider = ({ children }) => {
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState(searchQuery);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (search) {
            loadPostsBySearch()
        } else {
            loadPostsByPage()
        }
    }, [search, page, dispatch])

    const handleSetSearch = (value) => {
        setSearch(value)
    }

    const loadPostsBySearch = () => {
        dispatch(getPostsBySearch({ search }));
        navigate(`/posts/search?searchQuery=${search || 'none'}`);
    };

    const loadPostsByPage = () => {
        dispatch(getPosts(page));
        navigate(`/posts?page=${page}`);
    }

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
