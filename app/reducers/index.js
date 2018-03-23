import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from 'sagas';
import searchReducer from 'reducers/searchReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  search: searchReducer,
});

const enhancers = applyMiddleware(
  sagaMiddleware,
);

const composeEnhancers = __DEV__ ?
  composeWithDevTools : compose;

const store = createStore(
  reducers,
  composeEnhancers(enhancers),
);

sagaMiddleware.run(rootSaga);

export default store;
