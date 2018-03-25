import React from 'react';
import { View, Text } from 'react-native';

import Avatar from 'components/Avatar';

import styles from './styles';

const User = (props) => {
  const {
    isLightMode, avatar_url, login, name, company, location
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
          {
            !isLightMode &&
            <Text>
              {name || 'No name'} from {location || "github doesn't know"}
            </Text>
          }
          <Text style={styles.loginText}>
            @{login}
          </Text>
          {
            !isLightMode && company &&
            <Text>
              Working @ {company}
            </Text>
          }
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
