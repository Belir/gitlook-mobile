import { FETCH_REPO_CONTRIBUTORS_REQUESTED } from 'constants/actionTypes';

export const requestFetchContributors = (ownerLogin, repoName) => ({
  type: FETCH_REPO_CONTRIBUTORS_REQUESTED,
  payload: {
    ownerLogin,
    repoName,
  },
});
