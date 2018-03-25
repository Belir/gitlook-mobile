import React from 'react';
import { View, Text } from 'react-native';

import Link from 'components/Link';
import styles from './styles';

const TableRow = (props) => {
  const {
    title, col
  } = props;

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.col,
          styles.titleCol,
          props.titleWidth && {
            width: props.titleWidth,
            maxWidth: props.titleWidth,
          }]}
      >
        <Text>
          {title}
        </Text>
      </View>
      <View style={styles.col}>
        {
          col.url ?
            <Link
              to={col.url}
              text={col.text}
            />
          : <Text>
            {col.text}
          </Text>
        }
      </View>
    </View>
  )
};

TableRow.defaultProps = {
  titleWidth: 80,
}

export default TableRow;
