import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Repository from 'components/Repository';
import Spinner from 'components/Spinner';

class RepositoryScene extends PureComponent {
  render() {
    return (
      <SceneView align='top'>
        {
          this.props.isLoading ?
            <Spinner />
            : <Repository {...this.props.repository} />
        }
      </SceneView>
    )
  }
};

const mapStateToProps = (state) => {
  const { routes, index } = state.navigation;
  const currentNavParams = routes[index].params;
  console.log('params', currentNavParams)
  const repository = state.repositories.data.find((repo) =>
    repo.full_name === `${currentNavParams.ownerLogin}/${currentNavParams.repoName}`
  );
  console.log(state);
  console.log(repository)
  return ({
    isLoading: state.repositories.status.isLoading,
    repository,
  })
};

export default connect(mapStateToProps)(RepositoryScene);
