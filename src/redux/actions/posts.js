import { POSTS_FETCHED_FAILED, POSTS_FETCHED_REQUESTED, POSTS_FETCHED_SUCCESSED } from '../constants';

export const fetchPosts = () => ({
  type: POSTS_FETCHED_REQUESTED,
});
export const getError = (error) => ({
  type: POSTS_FETCHED_FAILED,
  payload: error,
});
export const fetchSuccessed = (payload) => ({
  type: POSTS_FETCHED_SUCCESSED,
  payload,
});
