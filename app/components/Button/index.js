import React, { Fragment } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

import { LIGHT_BLUE } from 'constants/colors';
import styles from './styles';

const Button = (props) => {
  const {
    title, onPress, activeOpacity, disabled, fullWidth
  } = props;

  return (
    <Fragment>
      {
        props.fullWidth ?
          <View style={styles.container}>
            <TouchableHighlight
              activeOpacity={activeOpacity}
              onPress={disabled || onPress}
              style={styles.button}
              underlayColor={LIGHT_BLUE}
            >
              <Text style={styles.buttonText}>
                {props.title}
              </Text>
            </TouchableHighlight>
          </View>
          : <TouchableHighlight
            activeOpacity={activeOpacity}
            onPress={disabled || onPress}
            style={styles.button}
            underlayColor={LIGHT_BLUE}
          >
            <Text style={styles.buttonText}>
              {props.title}
            </Text>
          </TouchableHighlight>
      }
    </Fragment>
  );
}

Button.defaultProps = {
  title: '',
  activeOpacity: 80,
  disabled: false,
}

export default Button;
