import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { fetchSuccessed, getError } from '../actions/posts';
import api from '../api/index';

function* postsWorker() {
  try {
    const { data } = yield call(api.get, '/posts');
    yield put(fetchSuccessed(data));
  } catch (error) {
    yield put(getError(error.message));
  }
}

function* postsWatcher() {
  yield takeLatest(actionTypes.POSTS_FETCHED_REQUESTED, postsWorker);
}

export default postsWatcher;
