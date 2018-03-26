import { StyleSheet, Dimensions } from 'react-native';

import { BLUE, RED } from 'constants/colors';

export default StyleSheet.create({
  contentWrapper: {
    alignSelf: 'stretch',
    paddingBottom: 20,
  },
  searchFormWrapper: {
    alignSelf: 'stretch',
    backgroundColor: BLUE,
    borderRadius: 5,
  },
  logo: {
    marginBottom: -8,
    width: 80,
    height: 80,
  },
  error: {
    position: 'absolute',
    color: RED,
    bottom: 0,
  },
});
