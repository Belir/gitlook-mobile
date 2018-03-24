import { StyleSheet, Dimensions } from 'react-native';

import { BLUE } from 'constants/colors';

export default StyleSheet.create({
  searchFormWrapper: {
    position: 'relative',
    alignSelf: 'stretch',
    backgroundColor: BLUE,
    borderRadius: 5,
  },
  logo: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: -100,
  }
});
