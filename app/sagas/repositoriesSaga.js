import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  FETCH_REPOSITORIES_REQUESTED,
  FETCH_REPOSITORIES_STARTED,
  FETCH_REPOSITORIES_SUCCEEDED,
  FETCH_REPOSITORIES_FAILED,
  FETCH_REPOSITORIES_FINISHED
} from 'constants/actionTypes';
import { Search } from 'services/GithubAPI';

function* getRepositories(action) {
  const { query } = action.payload;

  try {
    yield put({ type: FETCH_REPOSITORIES_STARTED });

    const response = yield call(Search.repositories, query);

    yield put({ type: FETCH_REPOSITORIES_SUCCEEDED, payload: { data: response.data } });

    yield put({ type: FETCH_REPOSITORIES_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_REPOSITORIES_FAILED, payload: { error } });
  }
};

export default function* getRepositoriesSaga() {
  yield all([
    takeLatest(FETCH_REPOSITORIES_REQUESTED, getRepositories),
  ]);
};
