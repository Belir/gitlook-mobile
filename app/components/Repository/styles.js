import { StyleSheet } from 'react-native';

import { GREY } from 'constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    flex: 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  basicContainer: {
    flex: 1,
  },
  ownerText: {
    color: GREY,
  },
  avatarContainer: {
    paddingRight: 10,
  },
  detailsContainer: {
    paddingTop: 10,
  },
});
