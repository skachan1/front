import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { registerSuccessed, registerError } from '../actions/auth';
import toggleModal from '../actions/modal';
import api from '../api/index';

function* registerWorker(action) {
  try {
    const { data } = yield call(api.post, '/auth/registration', action.payload);
    yield put(registerSuccessed(data));
    yield put(toggleModal({ status: false }));
  } catch (error) {
    yield put(registerError(error.response.data));
  }
}

function* registerWatcher() {
  yield takeLatest(actionTypes.REGISTER_REQUESTED, registerWorker);
}

export default registerWatcher;
