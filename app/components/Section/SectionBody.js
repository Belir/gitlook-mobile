import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';

import Spinner from 'components/Spinner';
import styles from './styles';

class SectionBody extends PureComponent {
  renderItem = ({ item }) => {
    const {
      ItemComponent, itemProps, itemKey
    } = this.props;

    return (
      <ItemComponent {...item} />
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
