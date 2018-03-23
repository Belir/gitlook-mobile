import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import rootSaga from 'sagas';
import searchReducer from 'reducers/searchReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  search: searchReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware,
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
