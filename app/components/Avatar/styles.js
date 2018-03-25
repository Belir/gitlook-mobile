import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / PixelRatio.get(),
  }
});
