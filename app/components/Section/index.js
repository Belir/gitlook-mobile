import React from 'react';
import { View, Text } from 'react-native';

import SectionHeading from './SectionHeading';
import SectionBody from './SectionBody';
import styles from './styles';

const Section = (props) => {
  const {
    headingText, items, itemComponent, itemProps, itemKey,
    isLoading, error, horizontal
  } = props;

  return (
    <View style={styles.container}>
      <SectionHeading headingText={headingText} />
      <SectionBody
        items={items}
        ItemComponent={itemComponent}
        itemProps={itemProps}
        itemKey={itemKey}
        isLoading={isLoading}
        horizontal={horizontal}
      />
    </View>
  )
};

Section.defaultProps = {
  items: [],
  isLoading: true,
  bodyHeight: 200,
  itemProps: {},
  horizontal: false,
};

export { SectionHeading, SectionBody };
export default Section;