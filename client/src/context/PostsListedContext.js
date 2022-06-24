import React, { createContext, useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { getPostsBySearch } from '../actions/posts';

export const PostsListedContext = createContext(null);
export const usePostsListedContext = () => useContext(PostsListedContext);

const useQuery = () => {
    return new URLSearchParams(useNavigate().search);
}

export const PostsListedContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const handleSetSearch = (value) => setSearch(value)

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch({ search }));
            navigate(`/posts/search?searchQuery=${search || 'none'}`);
        } else {
            navigate('/');
        }
    };

    return (
        <PostsListedContext.Provider
            value={{
                page,
                searchQuery,
                search,
                handleSetSearch,
                searchPost,
            }}
        >
            {children}
        </PostsListedContext.Provider>
    );
};
