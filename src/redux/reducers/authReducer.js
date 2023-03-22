import {
  LOGIN_FAILED,
  LOGIN_SUCCESSED,
  LOGIN_REQUESTED,
  REGISTER_FAILED,
  REGISTER_SUCCESSED,
  REGISTER_REQUESTED,
  LOGOUT_USER,
} from '../constants';

import { getToken } from '../../storage/token';

const initialState = {
  isAuth: Boolean(getToken()),
  data: {},
  isLoading: false,
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESSED:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        data: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: {},
      };
    case REGISTER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REGISTER_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    default: return state;
  }
}
