import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const SectionHeading = (props) => {
  const {
    title
  } = props;

  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>
        {title.toUpperCase()}
      </Text>
    </View>
  )
};

export default SectionHeading;
