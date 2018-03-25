import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import Avatar from 'components/Avatar';
import TableRow from 'components/TableRow';

import styles from './styles';

const User = (props) => {
  const {
    isLightMode, avatar_url, login, name, company, location,
    bio, followers, following, blog, public_repos, public_gists,
  } = props;

  return (
    <ScrollView>
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
                {name} from {location}
              </Text>
            }
            <Text style={styles.loginText}>
              @{login}
            </Text>
            {
              !isLightMode && company &&
              <Text>
                Working at {company}
              </Text>
            }
          </View>
        </View>
        {
          !isLightMode &&
          <View style={styles.detailsContainer}>
            <TableRow
              titleText='Blog:'
              cols={[{
                key: '1',
                text: blog || 'Empty',
                url: blog || false,
              }]}
            />
            <TableRow
              titleText='Bio:'
              cols={[{
                key: '1',
                text: bio || 'Empty',
              }]}
            />
            <TableRow
              titleText='Followers:'
              cols={[{
                key: '1',
                text: followers,
              }]}
            />
            <TableRow
              titleText='Following:'
              cols={[{
                key: '1',
                text: following,
              }]}
            />
            <TableRow
              titleText='Gists:'
              cols={[{
                key: '1',
                text: public_gists,
              }]}
            />
          </View>
        }
      </View>
    </ScrollView>
  )
};

User.defaultProps = {
  name: 'No name',
  location: "github doesn't know",
  bio: 'Empty',
};

export default User;
