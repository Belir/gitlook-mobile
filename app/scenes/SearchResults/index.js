import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Section from 'components/Section';
import User from 'components/User';
import Repository from 'components/Repository';

import { requestFetchUserInfo } from 'actions/usersActions';
import { requestFetchRepoInfo } from 'actions/repositoriesActions';

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

  _onRepositoryPress = (fullName) => {
    const ownerAndRepoName = fullName.split('/');
    this.props.navigation.navigate({
      routeName: 'RepositoryScreen',
      params: {
        ownerLogin: ownerAndRepoName[0],
        repoName: ownerAndRepoName[1],
      },
    });
    this.props.requestFetchRepoInfo(ownerAndRepoName[0], ownerAndRepoName[1]);
  }

  render() {
    return (
      <SceneView align='top'>
        <View style={styles.section}>
          <Section
            title='Users'
            items={this.props.users.data}
            itemKey='login'
            isLoading={this.props.isUsersLoading}
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
            isLoading={this.props.isRepositoriesLoading}
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
  requestFetchRepoInfo,
};

const mapStateToProps = (state) => ({
  users: state.users,
  repositories: state.repositories,
  isRepositoriesLoading: state.repositories.status.isLoading,
  isUsersLoading: state.users.status.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
