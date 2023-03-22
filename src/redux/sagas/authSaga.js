import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { loginSuccessed, loginError } from '../actions/auth';
import api from '../api/index';
import toggleModal from '../actions/modal';
import { setToken } from '../../storage/token';

function* loginWorker(action) {
  try {
    const { data } = yield call(api.post, '/auth/login', action.payload);
    yield put(loginSuccessed(data));
    yield call(setToken, data.token);
    yield put(toggleModal({ status: false }));
  } catch (error) {
    yield put(loginError(error.response.data));
  }
}

function* loginWatcher() {
  yield takeLatest(actionTypes.LOGIN_REQUESTED, loginWorker);
}

export default loginWatcher;
