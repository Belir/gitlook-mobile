import React, { Fragment, PureComponent } from 'react';
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
        id={item[itemKey]}
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

  renderFooter = () => (
    <Fragment>
      {
        this.props.items.length === 0 &&
          <View style={styles.emptyContainer}>
            <Text>
              Unfortunately nothing :(
            </Text>
          </View>
      }
    </Fragment>
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
            ListFooterComponent={this.renderFooter}
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
