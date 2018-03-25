import React from 'react';
import { View, Text } from 'react-native';

import Avatar from 'components/Avatar';

import styles from './styles';

const User = (props) => {
  const {
    isLightMode, avatar_url, login
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.avatarContainer}>
          <Avatar source={{
            uri: avatar_url,
            method: 'GET',
          }} />
        </View>
        <View style={styles.basicContainer}>
          <Text style={styles.loginText}>
            @{login}
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

export default User;
