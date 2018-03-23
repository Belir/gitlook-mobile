import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import store from 'reducers';

import Routes from 'components/Routes';

const App = (props) => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
};

export default App;
