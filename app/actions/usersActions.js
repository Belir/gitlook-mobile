import { FETCH_USERS_REQUESTED } from 'constants/actionTypes';

export const requestFetchUsers = (query) => ({
  type: FETCH_USERS_REQUESTED,
  payload: {
    query,
  },
});
