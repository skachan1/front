import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress, Alert } from '@mui/material';

import Post from '../../components/Post/Post';
import { fetchPosts } from '../../redux/actions/posts';

import classes from './MainPage.module.css';

function MainPage() {
  const dispatch = useDispatch();
  const {
    posts,
    isLoading,
    error,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        { error }
      </Alert>
    );
  }

  return (
    <div className={classes.news}>
      {posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}
export default memo(MainPage);
