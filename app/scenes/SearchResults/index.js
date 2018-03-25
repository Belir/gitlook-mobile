import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Section from 'components/Section';
import User from 'components/User';

import styles from './styles';

class SearchResults extends PureComponent {
  _onUserPress = (id) => {

  }

  render() {
    return (
      <SceneView align='top'>
        <View style={styles.section}>
          <Section
            headingText='Users'
            items={Object.values(this.props.users.data)}
            itemKey='login'
            isLoading={this.props.users.status.isLoading}
            itemComponent={User}
            itemProps={{
              isLightMode: true,
              onPress: this._onUserPress,
            }}
          />
        </View>
      </SceneView>
    )
  }
};

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
