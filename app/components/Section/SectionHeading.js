import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const SectionHeading = (props) => {
  const {
    headingText
  } = props;

  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>
        {headingText.toUpperCase()}
      </Text>
    </View>
  )
};

export default SectionHeading;
