// @flow
import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import AppNavigator from 'components/AppNavigator';

const addListener = createReduxBoundAddListener('root')

class Routes extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this._onPressBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._onPressBack);
  }

  _onPressBack = () => {
    const { dispatch, navigation } = this.props;

    if (navigation.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
        addListener,
      })} />
    )
  }
};

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(Routes);
