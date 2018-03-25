import { FETCH_REPOSITORIES_REQUESTED } from 'constants/actionTypes';

export const requestFetchRepositories = (query) => ({
  type: FETCH_REPOSITORIES_REQUESTED,
  payload: {
    query,
  },
});
