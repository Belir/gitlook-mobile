import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles.js';

const Input = (props) => {
  const {
    value, editable, placeholder, autoGrow, autoCorrect,
    maxLength, keyboardType, clearTextOnFocus, enablesReturnKeyAutomatically,
    onChangeText
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        editable={editable}
        placeholder={placeholder}
        autoGrow={autoGrow}
        autoCorrect={autoCorrect}
        maxLength={maxLength}
        keyboardType={keyboardType}
        clearTextOnFocus={clearTextOnFocus}
        enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
        onChangeText={onChangeText}
      />
    </View>
  )
};

Input.defaultProps = {
  value: '',
  editable: true,
  placeholder: '',
  autoGrow: false,
  autoCorrect: false,
  keyboardType: 'default',
  clearTextOnFocus: false,
  enablesReturnKeyAutomatically: true,
}

export default Input;