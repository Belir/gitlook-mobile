import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Repository from 'components/Repository';
import Spinner from 'components/Spinner';

import { requestFetchUserInfo } from 'actions/usersActions';
import { requestFetchContributors } from 'actions/repositoriesActions';

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
              contributors={this.props.repository.contributors || []}
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
  const repository = state.repositories.data.find((repo) =>
    repo.full_name === `${navParams.ownerLogin}/${navParams.repoName}`
  );
  const { repositories, contributors } = state.repositories.status;

  return ({
    isContributorsLoading: contributors.isLoading,
    isRepositoriesLoading: repositories.isLoading,
    repository,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryScene);
