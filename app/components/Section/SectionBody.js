import React, { PureComponent } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import Spinner from 'components/Spinner';
import Anchor from 'components/Anchor';
import styles from './styles';

class SectionBody extends PureComponent {
  renderItem = ({ item }) => {
    const {
      ItemComponent, itemProps, itemKey
    } = this.props;

    const {
      onPress, ...restItemProps
    } = itemProps;

    return (
      <Anchor
        id={item.id}
        onPress={onPress}
      >
        <ItemComponent
          {...item}
          {...restItemProps}
        />
      </Anchor>
    )
  }

  renderSeparator = () => (
    <View style={styles.separator} />
  )

  itemKeyExtractor = (item) => item[this.props.itemKey]

  render() {
    const {
      items, isLoading, error
    } = this.props;

    return (
      <View style={styles.bodyContainer}>
        {isLoading && !error ?
          <Spinner />
        : <FlatList
            data={items}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={this.itemKeyExtractor}
        />}
        { error &&
          <Text>{error}</Text>
        }
      </View>
    )
  }
}

export default SectionBody;
