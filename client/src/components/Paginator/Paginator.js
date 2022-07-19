import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import usePagination from '@mui/material/usePagination/usePagination';

import "./styles.css"
import { getPosts } from '../../actions/posts';
import { usePostsListedContext } from '../../context/PostsListedContext';
import { Box } from '@mui/material';

const Paginator = ({ scrollToBrowseWords }) => {
    const { numberOfPages } = useSelector((state) => state.posts);
    const { searchQuery, page } = usePostsListedContext()
    const { items } = usePagination({ count: numberOfPages });
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
    }, [dispatch, page]);

    const backButtonItem = items[0]
    const nextButtonItem = items[items.length - 1]
    const selectedItem = items.find(item => item.selected)

    const handleClick = (buttonItem) => {
        buttonItem.onClick()
        scrollToBrowseWords()
    }

    return !searchQuery && (
        <div className="paginatorDiv">
            <Box component={Link} to={`/posts?page=${backButtonItem.page}`}>
                <button {...backButtonItem} onClick={() => handleClick(backButtonItem)}>&lt; BACK</button>
            </Box>
            <div className="paginatorDivMainContainer">
                <h4>Page:</h4>
                <div className="pageNumber">
                    <h4>{selectedItem.page}</h4>
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
