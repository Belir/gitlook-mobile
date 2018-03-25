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
  errorText: {
    color: RED,
  },
});
