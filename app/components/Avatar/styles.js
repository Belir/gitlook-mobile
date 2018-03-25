import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60 / PixelRatio.get(),
  }
});
