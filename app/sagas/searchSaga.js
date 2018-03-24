import { all, takeLatest, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import {
  UPDATE_SEARCH_PHRASE_REQUESTED,
  UPDATE_SEARCH_PHRASE_STARTED,
  UPDATE_SEARCH_PHRASE_SUCCEEDED,
  UPDATE_SEARCH_PHRASE_FAILED,
  UPDATE_SEARCH_PHRASE_FINISHED,
  FETCH_USERS_REQUESTED,
} from 'constants/actionTypes';
import { requestFetchUsers } from 'actions/usersActions';

function* updatePhrase(action) {
  const { data } = action.payload;

  try {
    yield put({ type: UPDATE_SEARCH_PHRASE_STARTED });

    yield put({ type: UPDATE_SEARCH_PHRASE_SUCCEEDED, payload: { data } });

    yield put({ type: UPDATE_SEARCH_PHRASE_FINISHED });

    yield put(requestFetchUsers(data.phrase));

    yield put(NavigationActions.navigate({
      routeName: 'SearchResults',
      params: {
        phrase: data.phrase
      }
    }));

  } catch (error) {
    yield put({ type: UPDATE_SEARCH_PHRASE_FAILED, payload: { error } });
  }
};

export default function* getUsersSaga() {
  yield all([
    takeLatest(UPDATE_SEARCH_PHRASE_REQUESTED, updatePhrase),
  ]);
};
