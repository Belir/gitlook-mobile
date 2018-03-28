import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  FETCH_REPO_CONTRIBUTORS_REQUESTED,
  FETCH_REPO_CONTRIBUTORS_STARTED,
  FETCH_REPO_CONTRIBUTORS_SUCCEEDED,
  FETCH_REPO_CONTRIBUTORS_FAILED,
  FETCH_REPO_CONTRIBUTORS_FINISHED,
} from 'constants/actionTypes';
import { Repositories } from 'services/GithubAPI';

function* getRepositoryContributors(action) {
  const { ownerLogin, repoName } = action.payload;

  try {
    yield put({ type: FETCH_REPO_CONTRIBUTORS_STARTED });

    const { data } = yield call(Repositories.contributors, ownerLogin, repoName);

    yield put({
      type: FETCH_REPO_CONTRIBUTORS_SUCCEEDED, payload: {
        data: {
          [`${ownerLogin}/${repoName}`]: data,
        },
      }
    });

    yield put({ type: FETCH_REPO_CONTRIBUTORS_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_REPO_CONTRIBUTORS_FAILED, payload: { error } });
  }
}

export default function* getRepositoriesSaga() {
  yield all([
    takeLatest(FETCH_REPO_CONTRIBUTORS_REQUESTED, getRepositoryContributors),
  ]);
};
