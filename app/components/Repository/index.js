import React from 'react';
import { View, Text } from 'react-native';

import Avatar from 'components/Avatar';

import styles from './styles';

const Repository = (props) => {
  const {
    isLightMode, avatar_url, full_name, owner
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.avatarContainer}>
          <Avatar source={{
            uri: owner.avatar_url,
            method: 'GET',
          }} />
        </View>
        <View style={styles.basicContainer}>
          <Text>
            {full_name}
          </Text>
          <Text style={styles.ownerText}>
            @{owner.login}
          </Text>
        </View>
      </View>
      {
        !isLightMode &&
        <View>

        </View>
      }
    </View>
  )
}

export default Repository;
