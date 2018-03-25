import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const Avatar = (props) => {
  const { source } = props;

  return (
    <Image
      style={styles.avatar}
      source={source}
    />
  )
};

export default Avatar;
