import {
  LOGIN_REQUESTED,
  LOGIN_FAILED,
  LOGIN_SUCCESSED,
  LOGOUT_USER,
  REGISTER_REQUESTED,
  REGISTER_FAILED,
  REGISTER_SUCCESSED,
} from '../constants';

export const loginRequested = (payload) => ({
  type: LOGIN_REQUESTED,
  payload,
});
export const loginError = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});
export const loginSuccessed = (payload) => ({
  type: LOGIN_SUCCESSED,
  payload,
});

export const registerRequested = (payload) => ({
  type: REGISTER_REQUESTED,
  payload,
});
export const registerError = (error) => ({
  type: REGISTER_FAILED,
  payload: error,
});
export const registerSuccessed = (payload) => ({
  type: REGISTER_SUCCESSED,
  payload,
});

const authUser = () => ({
  type: LOGOUT_USER,
});

export default authUser;
