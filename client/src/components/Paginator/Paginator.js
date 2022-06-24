/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';

import useStyles from './styles';
import { getPosts } from '../../actions/posts';
import { usePostsListedContext } from '../../context/PostsListedContext';

const Paginator = () => {
    const { numberOfPages } = useSelector((state) => state.posts);
    const { searchQuery, page } = usePostsListedContext()
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
    }, [dispatch, page]);

    return !searchQuery && (
        <Paper className={classes.paginator} elevation={2}>
            <Pagination
                classes={{ ul: classes.ul }}
                size="small"
                count={numberOfPages}
                page={Number(page) || 1}
                variant="outlined"
                color="primary"
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
                )}
            />
        </Paper>
    );
};

export default Paginator;
