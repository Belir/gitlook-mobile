import React, { PureComponent } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Input from 'components/Input';
import Button from 'components/Button';

import { updateSearchPhrase } from 'actions/searchActions';

import styles from './styles';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ''
    };
  }

  _onChangeSearchInput = (text) => {
    this.setState({
      searchPhrase: text
    });
  }

  _handleSearch = () => {
    this.props.updateSearchPhrase(this.state.searchPhrase);
  }

  render() {
    return (
      <SceneView align='center'>
        <View style={styles.searchFormWrapper}>
          <Input
            onChangeText={this._onChangeSearchInput}
            value={this.state.searchPhrase}
            placeholder="Hmm... I'm looking for..."
          />
          <Button
            onPress={this._handleSearch}
            title="Search"
            fullWidth={true}
          />
        </View>
      </SceneView>
    )
  }
};

const mapDispatchToProps = {
  updateSearchPhrase,
};

const mapStateToProps = (state) => ({
  searchPhrase: state.search.searchPhrase,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
