import React from 'react';
import { Image } from 'react-native';

import chevronLeft from 'assets/images/chevron_left.png';
import chevronBottom from 'assets/images/chevron_bottom.png';
import chevronRight from 'assets/images/chevron_right.png';
import chevronTop from 'assets/images/chevron_top.png';

import styles from './styles';

const variations = {
  left: {
    styles: styles.horizontalChevron,
    src: chevronLeft,
  },
  right: {
    styles: styles.horizontalChevron,
    src: chevronRight,
  },
  bottom: {
    styles: styles.verticalChevron,
    src: chevronBottom,
  },
  top: {
    styles: styles.verticalChevron,
    src: chevronTop,
  }
};

const Chevron = (props) => {
  const { direction } = props;

  return (
    <Image
      source={variations[direction].src}
      style={variations[direction].styles}
    />
  )
};

Chevron.defaultProps = {
  direction: 'left',
};

export default Chevron;
