import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Repository from 'components/Repository';
import Spinner from 'components/Spinner';

import { requestFetchUserInfo } from 'actions/usersActions';
import { requestFetchCollaborators } from 'actions/repositoriesActions';

class RepositoryScene extends PureComponent {
  _onCollaboratorPress = (userLogin) => {
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
    this.props.requestFetchCollaborators(owner.login, name);
  }

  render() {
    return (
      <SceneView align='top'>
        {
          this.props.isLoading ?
            <Spinner />
            : <Repository
              {...this.props.repository}
              collaborators={this.props.repository.collaborators || []}
              isLoading={this.props.isLoading}
              onCollaboratorsExpand={this._onCollaboratorsExpand}
              onCollaboratorsPress={this._onCollaboratorPress}
            />
        }
      </SceneView>
    )
  }
};


const mapDispatchToProps = {
  requestFetchUserInfo,
  requestFetchCollaborators,
};

const mapStateToProps = (state, ownProps) => {
  const { params: navParams } = ownProps.navigation.state;
  const repository = state.repositories.data.find((repo) =>
    repo.full_name === `${navParams.ownerLogin}/${navParams.repoName}`
  );

  return ({
    isLoading: state.repositories.status.isLoading,
    repository,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryScene);
