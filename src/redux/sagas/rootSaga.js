import { all } from 'redux-saga/effects';

import postsSaga from './postsSaga';
import authSaga from './authSaga';
import registerSaga from './registerSaga';

export default function* rootSaga() {
  yield all([
    postsSaga(), authSaga(), registerSaga(),
  ]);
}
