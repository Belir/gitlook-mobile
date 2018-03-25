import { StyleSheet } from 'react-native';

import { GREY } from 'constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  basicContainer: {
    flex: 1,
  },
  loginText: {
    color: GREY,
  },
  avatarContainer: {
    paddingRight: 20,
  },
  detailsContainer: {
    paddingTop: 10,
  },
});
