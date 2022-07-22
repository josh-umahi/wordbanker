import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import usePagination from '@mui/material/usePagination/';
import { Box } from '@mui/material';

import "./styles.css"
import { usePostsListedContext } from '../../context/PostsListedContext';

const Paginator = ({ scrollToBrowseWords }) => {
    const { numberOfPages, isLoading } = useSelector((state) => state.posts);
    const { searchQuery, page } = usePostsListedContext()
    const pageAsNumber = Number(page)
    const { items } = usePagination({ count: numberOfPages, page: pageAsNumber });

    const handleClick = (buttonItem) => {
        buttonItem.onClick()
        scrollToBrowseWords()
    }

    const backButtonItem = items[0]
    const nextButtonItem = items[items.length - 1]

    if (isLoading) {
        backButtonItem.disabled = true;
        nextButtonItem.disabled = true;
    }

    return !searchQuery && (
        <div className="paginatorDiv">
            <Box component={Link} to={`/posts?page=${backButtonItem.page}`}>
                <button {...backButtonItem} onClick={() => handleClick(backButtonItem)}>&lt; BACK</button>
            </Box>
            <div className="paginatorDivMainContainer">
                <h4>Page:</h4>
                <div className="pageNumber">
                    <h4>{pageAsNumber}</h4>
                </div>
                <h4>of {numberOfPages ?? "..."}</h4>
            </div>
            <Box component={Link} to={`/posts?page=${nextButtonItem.page}`}>
                <button {...nextButtonItem} onClick={() => handleClick(nextButtonItem)}>NEXT &gt;</button>
            </Box>
        </div>
    )
};

export default Paginator;
