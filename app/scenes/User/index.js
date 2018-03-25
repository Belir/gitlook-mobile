import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import User from 'components/User';

class SearchResults extends PureComponent {
  render() {
    return (
      <SceneView align='top'>
        <User {...this.props.user} />
      </SceneView>
    )
  }
};

const mapStateToProps = (state) => {
  const { routes, index } = state.navigation
  const currentNavParams = routes[index].params;
  const user = state.users.data.find((user) => user.login === currentNavParams.userLogin);

  return ({
    user
  })
};

export default connect(mapStateToProps)(SearchResults);
