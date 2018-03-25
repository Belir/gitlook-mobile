import React from 'react';
import { View, Text } from 'react-native';

import Avatar from 'components/Avatar';
import TableRow from 'components/TableRow';

import styles from './styles';

const Repository = (props) => {
  const {
    isLightMode, full_name, owner, homepage, license,
    open_issues_count, stargazers_count, subscribers_count, language,
    description
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
            {full_name} {!isLightMode && language}
          </Text>
          <Text style={styles.ownerText}>
            @{owner.login}
          </Text>
          {
            !isLightMode && <Text style={styles.ownerText}>
              {license.name}
            </Text>
          }
        </View>
      </View>
      {
        !isLightMode &&
        <View style={styles.detailsContainer}>
          <TableRow
            titleText='Homepage:'
            cols={[{
              key: '1',
              text: homepage || 'Empty',
              url: homepage || false,
            }]}
          />
          <TableRow
            titleText='Description:'
            cols={[{
              key: '1',
              text: description || 'Empty',
            }]}
          />
        </View>
      }
    </View>
  )
}

export default Repository;
