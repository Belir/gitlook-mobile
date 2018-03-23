import React from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './styles.js';

// Comment
// This solution could handle more edge cases like 'top left' and so on
// ['top left']: styles.containerTopLeft, ...

const alignStyles = {
  start: styles.wrapperStart,
  center: styles.wrapperCenter,
  end: styles.wrapperEnd,
}

const SceneView = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.wrapperStyles, alignStyles[props.align]]}>
        {props.children}
      </View>
    </SafeAreaView>
  )
};

SceneView.defaultProps = {
  align: 'start',
};

export default SceneView;