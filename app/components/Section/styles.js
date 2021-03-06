import { StyleSheet } from 'react-native';

import { BLUE, WHITE, RED } from 'constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    alignSelf: 'stretch',
    backgroundColor: BLUE,
    padding: 10,
  },
  heading: {
    color: WHITE,
  },
  bodyContainer: {
    flex: 1
  },
  separator: {
    backgroundColor: BLUE,
    height: 1,
  },
  errorText: {
    color: RED,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  }
});
