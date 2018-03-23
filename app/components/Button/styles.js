import { StyleSheet } from 'react-native';

import { BLUE, WHITE } from 'constants/colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },
  button: {
    backgroundColor: BLUE,
    borderRadius: 5,
    padding: 6,
  },
  buttonText: {
    color: WHITE,
    fontWeight: '600',
    textAlign: 'center',
  },
});
