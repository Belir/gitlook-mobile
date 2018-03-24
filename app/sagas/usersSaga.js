import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
  FETCH_USERS_FINISHED
} from 'constants/actionTypes';
import { Search } from 'services/GithubAPI';

function* getUsers(action) {
  const { query } = action.payload;

  try {
    yield put({ type: FETCH_USERS_STARTED });

    const response = yield call(Search.users, query);

    yield put({ type: FETCH_USERS_SUCCEEDED, payload: { data: response.data }});

    yield put({ type: FETCH_USERS_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_USERS_FAILED, payload: { error } });
  }
};

export default function* getUsersSaga() {
 yield all([
   takeLatest(FETCH_USERS_REQUESTED, getUsers),
 ]);
};
