import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import User from 'components/User';
import Spinner from 'components/Spinner';

class UserScene extends PureComponent {
  render() {
    return (
      <SceneView align='top'>
        {
          this.props.isLoading ?
            <Spinner />
          : <User {...this.props.user} />
        }
      </SceneView>
    )
  }
};

const mapStateToProps = (state) => {
  const { routes, index } = state.navigation;
  const currentNavParams = routes[index].params;
  const user = state.users.data.find((user) => user.login === currentNavParams.userLogin);

  return ({
    isLoading: state.users.status.isLoading,
    user,
  })
};

export default connect(mapStateToProps)(UserScene);
