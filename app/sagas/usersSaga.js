import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
  FETCH_USERS_FINISHED,
  FETCH_USER_INFO_REQUESTED,
  FETCH_USER_INFO_STARTED,
  FETCH_USER_INFO_SUCCEEDED,
  FETCH_USER_INFO_FAILED,
  FETCH_USER_INFO_FINISHED,
} from 'constants/actionTypes';
import { Search, Users } from 'services/GithubAPI';

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

function* getUserInfo(action) {
  const { userLogin } = action.payload;

  try {
    yield put({ type: FETCH_USER_INFO_STARTED });

    const response = yield call(Users.single, userLogin);

    yield put({ type: FETCH_USER_INFO_SUCCEEDED, payload: { data: response.data } });

    yield put({ type: FETCH_USER_INFO_FINISHED });

  } catch (error) {
    yield put({ type: FETCH_USER_INFO_FAILED, payload: { error } });
  }
}

export default function* getUsersSaga() {
 yield all([
   takeLatest(FETCH_USERS_REQUESTED, getUsers),
   takeLatest(FETCH_USER_INFO_REQUESTED, getUserInfo),
 ]);
};
