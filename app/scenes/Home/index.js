import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
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
      searchPhrase: '',
      error: {
        show: false,
        msg: 'This field cannot be empty',
      },
    };
  }

  _onChangeSearchInput = (text) => {
    this.setState({
      searchPhrase: text
    });
  }

  _handleSearch = () => {
    this.setState({
      error: {
        ...this.state.error,
        show: false,
      }
    });

    if (!this._validateForm()) {
      this.setState({ error: {
          ...this.state.error,
          show: true,
        }
      });
      return;
    }

    this.props.navigation.navigate({
      routeName: 'SearchResults',
      params: {
        phrase: this.state.searchPhrase
      }
    });

    this.props.updateSearchPhrase(this.state.searchPhrase);
  }

  _validateForm = () => {
    const isValid = this.state.searchPhrase !== '';
    return isValid;
  }

  render() {
    const {
      searchPhrase, error,
    } = this.state;

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
            value={searchPhrase}
            placeholder="Hmm... I'm looking for..."
          />
          <Button
            onPress={this._handleSearch}
            title="Search"
            fullWidth={true}
          />
          {
            error.show &&
              <Text style={styles.error}>
                {error.msg}
              </Text>
          }
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
