import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
  wrapperStyles: {
    flex: 1,
  },
  wrapperStart: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapperCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperEnd: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});