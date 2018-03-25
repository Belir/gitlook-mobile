import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Input from 'components/Input';
import Button from 'components/Button';

import { updateSearchPhrase } from 'actions/searchActions';

import logo from 'assets/images/gitlook-logo.png';
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
      <SceneView
        align='center'
        wPadding
      >
        <View style={styles.searchFormWrapper}>
          <Image
            style={styles.logo}
            source={logo}
          />
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
  searchPhrase: state.search.data.phrase,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
