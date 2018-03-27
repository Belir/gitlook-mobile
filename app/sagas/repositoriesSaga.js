import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  FETCH_REPOSITORIES_REQUESTED,
  FETCH_REPOSITORIES_STARTED,
  FETCH_REPOSITORIES_SUCCEEDED,
  FETCH_REPOSITORIES_FAILED,
  FETCH_REPOSITORIES_FINISHED,
  FETCH_REPO_INFO_REQUESTED,
  FETCH_REPO_INFO_STARTED,
  FETCH_REPO_INFO_SUCCEEDED,
  FETCH_REPO_INFO_FAILED,
  FETCH_REPO_INFO_FINISHED,
  FETCH_REPO_CONTRIBUTORS_REQUESTED,
  FETCH_REPO_CONTRIBUTORS_STARTED,
  FETCH_REPO_CONTRIBUTORS_SUCCEEDED,
  FETCH_REPO_CONTRIBUTORS_FAILED,
  FETCH_REPO_CONTRIBUTORS_FINISHED,
} from 'constants/actionTypes';
import { Search, Repositories } from 'services/GithubAPI';

function* getRepositories(action) {
  const { query } = action.payload;

  try {
    yield put({ type: FETCH_REPOSITORIES_STARTED });

    const { data } = yield call(Search.repositories, query);

    yield put({ type: FETCH_REPOSITORIES_SUCCEEDED, payload: { data } });

    yield put({ type: FETCH_REPOSITORIES_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_REPOSITORIES_FAILED, payload: { error } });
  }
};

function* getRepository(action) {
  const { ownerLogin, repoName } = action.payload;

  try {
    yield put({ type: FETCH_REPO_INFO_STARTED });

    const { data } = yield call(Repositories.single, ownerLogin, repoName);

    yield put({ type: FETCH_REPO_INFO_SUCCEEDED, payload: { data } });

    yield put({ type: FETCH_REPO_INFO_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_REPO_INFO_FAILED, payload: { error } });
  }
}

function* getRepositoryContributors(action) {
  const { ownerLogin, repoName } = action.payload;

  try {
    yield put({ type: FETCH_REPO_CONTRIBUTORS_STARTED });

    const { data } = yield call(Repositories.contributors, ownerLogin, repoName);

    yield put({ type: FETCH_REPO_CONTRIBUTORS_SUCCEEDED, payload: {
      data: {
        full_name: `${ownerLogin}/${repoName}`,
        contributors: data,
      },
    }});

    yield put({ type: FETCH_REPO_CONTRIBUTORS_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_REPO_CONTRIBUTORS_FAILED, payload: { error } });
  }
}

export default function* getRepositoriesSaga() {
  yield all([
    takeLatest(FETCH_REPOSITORIES_REQUESTED, getRepositories),
    takeLatest(FETCH_REPO_INFO_REQUESTED, getRepository),
    takeLatest(FETCH_REPO_CONTRIBUTORS_REQUESTED, getRepositoryContributors),
  ]);
};
