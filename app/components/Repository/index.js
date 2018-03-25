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
    description, collaborators
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
                    {license.name}
                  </Text>
                }
              </View>
            </View>
            {
              !isLightMode &&
              <View style={styles.detailsContainer}>
                <TableRow
                  title='Home:'
                  cols={[{
                    key: '1',
                    text: homepage || 'Empty',
                    url: homepage || false,
                  }]}
                />

                <TableRow
                  title='Info:'
                  cols={[{
                    key: '1',
                    text: description || 'Empty',
                  }]}
                />

                <TableRow
                  title='Stars:'
                  cols={[{
                    key: '1',
                    text: stargazers_count,
                  }]}
                />

                <TableRow
                  title='Open issues:'
                  cols={[{
                    key: '1',
                    text: open_issues_count,
                  }]}
                />
              </View>
            }
          </ScrollView>
        </View>
        {
          !isLightMode &&
          <View style={styles.section}>
            <Section
              title='Collaborators'
              items={props.collaborators}
              itemKey='login'
              isLoading={props.isLoading}
              itemComponent={User}
              itemProps={{
                isLightMode: true,
                onPress: props.onCollaboratorsPress,
              }}
            />
          </View>
        }
      </View>
  )
};

export default Repository;
