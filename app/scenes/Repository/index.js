import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Repository from 'components/Repository';
import Spinner from 'components/Spinner';

import { requestFetchUserInfo } from 'actions/usersActions';
import { requestFetchContributors } from 'actions/contributorsActions';

class RepositoryScene extends PureComponent {
  _onContributorPress = (userLogin) => {
    this.props.navigation.navigate({
      routeName: 'UserScreen',
      params: {
        userLogin,
      },
    });
    this.props.requestFetchUserInfo(userLogin);
  }

  componentDidMount() {
    const { owner, name } = this.props.repository;
    this.props.requestFetchContributors(owner.login, name);
  }

  render() {
    return (
      <SceneView align='top'>
        {
          this.props.isRepositoriesLoading ?
            <Spinner />
            : <Repository
              {...this.props.repository}
              contributors={this.props.contributors || []}
              isContributorsLoading={this.props.isContributorsLoading}
              onContributorsPress={this._onContributorPress}
            />
        }
      </SceneView>
    )
  }
};


const mapDispatchToProps = {
  requestFetchUserInfo,
  requestFetchContributors,
};

const mapStateToProps = (state, ownProps) => {
  const { params: navParams } = ownProps.navigation.state;
  const repoFullName = `${navParams.ownerLogin}/${navParams.repoName}`;
  const repository = state.repositories.data.find((repo) =>
    repo.full_name === repoFullName
  );

  return ({
    isContributorsLoading: state.contributors.status.isLoading,
    isRepositoriesLoading: state.repositories.status.isLoading,
    contributors: state.contributors.data[repoFullName],
    repository,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryScene);
