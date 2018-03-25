import {
  FETCH_REPOSITORIES_REQUESTED,
  FETCH_REPO_INFO_REQUESTED,
} from 'constants/actionTypes';

export const requestFetchRepositories = (query) => ({
  type: FETCH_REPOSITORIES_REQUESTED,
  payload: {
    query,
  },
});

export const requestFetchRepoInfo = (ownerLogin, repoName) => ({
  type: FETCH_REPO_INFO_REQUESTED,
  payload: {
    ownerLogin,
    repoName,
  },
});
