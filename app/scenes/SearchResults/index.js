import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';

class SearchResults extends PureComponent {
  render() {
    return (
      <SceneView align='top'>

      </SceneView>
    )
  }
};

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
  searchPhrase: state.search.data.phrase,
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
