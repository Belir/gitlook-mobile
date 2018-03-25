import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from 'sagas';
import navigationReducer from 'reducers/navigationReducer';
import searchReducer from 'reducers/searchReducer';
import usersReducer from 'reducers/usersReducer';
import repositoriesReducer from 'reducers/repositoriesReducer';

const sagaMiddleware = createSagaMiddleware();
const navigatorMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.navigation,
);

const reducers = combineReducers({
  navigation: navigationReducer,
  search: searchReducer,
  users: usersReducer,
  repositories: repositoriesReducer,
});

const enhancers = applyMiddleware(
  sagaMiddleware,
  navigatorMiddleware,
);

const composeEnhancers = __DEV__ ?
  composeWithDevTools : compose;

const store = createStore(
  reducers,
  composeEnhancers(enhancers),
);

sagaMiddleware.run(rootSaga);
console.log(store.getState())
export default store;
