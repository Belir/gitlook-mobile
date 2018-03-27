import React, { PureComponent } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Avatar from 'components/Avatar';
import TableRow from 'components/TableRow';
import Section from 'components/Section';
import User from 'components/User';

import styles from './styles';

const Repository = (props) => {
  const {
    isLightMode, full_name, owner, homepage, license,
    open_issues_count, stargazers_count, language,
    description, contributors, isContributorsLoading
  } = props;

  return (
      <View style={styles.container}>
        <View style={styles.section}>
          <ScrollView>
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
                    {license && license.name || 'No license'}
                  </Text>
                }
              </View>
            </View>
            {
              !isLightMode &&
              <View style={styles.detailsContainer}>
                <TableRow
                  title='Home:'
                  col={{
                    text: homepage || 'Empty',
                    url: homepage || false,
                  }}
                />

                <TableRow
                  title='Info:'
                  col={{
                    text: description || 'Empty',
                  }}
                />

                <TableRow
                  title='Stars:'
                  col={{
                    text: stargazers_count,
                  }}
                />

                <TableRow
                  title='Open issues:'
                  col={{
                    text: open_issues_count,
                  }}
                />
              </View>
            }
          </ScrollView>
        </View>
        {
          !isLightMode &&
          <View style={styles.section}>
            <Section
              title='Contributors'
              emptyText='Something went wrong :('
              items={props.contributors}
              itemKey='login'
              isLoading={props.isContributorsLoading}
              itemComponent={User}
              itemProps={{
                isLightMode: true,
                onPress: props.onContributorsPress,
              }}
            />
          </View>
        }
      </View>
  )
};

export default Repository;
