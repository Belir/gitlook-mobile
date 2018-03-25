import {
  FETCH_USERS_REQUESTED,
  FETCH_USER_INFO_REQUESTED,
} from 'constants/actionTypes';

export const requestFetchUsers = (query) => ({
  type: FETCH_USERS_REQUESTED,
  payload: {
    query,
  },
});

export const requestFetchUserInfo = (userLogin) => ({
  type: FETCH_USER_INFO_REQUESTED,
  payload: {
    userLogin,
  },
});
