import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { BLUE } from 'constants/colors';
import styles from './styles';

const Spinner = (props) => {
  const {
    size, color
  } = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size}
        animating={true}
        color={color}
      />
    </View>
  )
};

Spinner.defaultProps = {
  animating: true,
  color: BLUE,
  size: 'small',
}

export default Spinner;
