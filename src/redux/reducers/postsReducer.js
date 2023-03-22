import { POSTS_FETCHED_FAILED, POSTS_FETCHED_SUCCESSED, POSTS_FETCHED_REQUESTED } from '../constants';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export default function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case POSTS_FETCHED_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POSTS_FETCHED_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case POSTS_FETCHED_FAILED:
      return {
        state,
        isLoading: false,
        error: action.payload,
        posts: [],
      };
    default: return state;
  }
}
