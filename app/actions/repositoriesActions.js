import {
  FETCH_REPOSITORIES_REQUESTED,
  FETCH_REPO_INFO_REQUESTED,
  FETCH_REPO_COLLABORATORS_REQUESTED,
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

export const requestFetchCollaborators = (ownerLogin, repoName) => ({
  type: FETCH_REPO_COLLABORATORS_REQUESTED,
  payload: {
    ownerLogin,
    repoName,
  },
});
