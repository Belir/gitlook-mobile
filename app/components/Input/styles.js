import { StyleSheet } from 'react-native';

import { WHITE, BLUE } from 'constants/colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  textInput: {
    backgroundColor: WHITE,
    borderColor: BLUE,
    borderRadius: 5,
    borderWidth: 2,
    padding: 6,
  }
});
