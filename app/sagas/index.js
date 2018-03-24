import { all, fork } from 'redux-saga/effects';

import searchSaga from 'sagas/searchSaga';
import usersSaga from 'sagas/usersSaga';

export default function* rootSaga () {
  yield all([
    fork(searchSaga),
    fork(usersSaga),
  ]);
};
