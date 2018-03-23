// @flow
import React from 'react';
import { StackNavigator } from 'react-navigation';

// Views
import Home from 'scenes/Home'

const Routes = StackNavigator({
  Home: {
    screen: Home,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    }
  }
});

export default Routes;
