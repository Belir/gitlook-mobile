import React, { PureComponent } from 'react';
import { Text, Linking } from 'react-native';

import styles from './styles';

class Link extends PureComponent {
  _onPressLink = () => {
    Linking.openURL(this.props.to);
  }

  render() {
    return (
      <Text
        style={styles.linkText}
        onPress={this._onPressLink}
      >
        {this.props.text}
      </Text>
    )
  }
}

export default Link;
