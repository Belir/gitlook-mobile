import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Section from 'components/Section';
import User from 'components/User';
import Repository from 'components/Repository';

import { requestFetchUserInfo } from 'actions/usersActions';

import styles from './styles';

class SearchResults extends PureComponent {
  _onUserPress = (userLogin) => {
    this.props.navigation.navigate({
      routeName: 'UserScreen',
      params: {
        userLogin,
      },
    });
    this.props.requestFetchUserInfo(userLogin);
  }

  _onRepositoryPress = (id) => {

  }

  render() {
    return (
      <SceneView align='top'>
        <View style={styles.section}>
          <Section
            title='Users'
            items={this.props.users.data}
            itemKey='login'
            isLoading={this.props.users.status.isLoading}
            itemComponent={User}
            itemProps={{
              isLightMode: true,
              onPress: this._onUserPress,
            }}
          />
        </View>
        <View style={styles.section}>
          <Section
            title='Repositories'
            items={this.props.repositories.data}
            itemKey='full_name'
            isLoading={this.props.repositories.status.isLoading}
            itemComponent={Repository}
            itemProps={{
              isLightMode: true,
              onPress: this._onRepositoryPress,
            }}
          />
        </View>
      </SceneView>
    )
  }
};

const mapDispatchToProps = {
  requestFetchUserInfo,
};

const mapStateToProps = (state) => ({
  users: state.users,
  repositories: state.repositories,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
