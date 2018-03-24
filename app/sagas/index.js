import { all, fork } from 'redux-saga/effects';

import usersSaga from 'sagas/usersSaga';

export default function* rootSaga () {
  yield all([
    fork(usersSaga),
  ]);
};
