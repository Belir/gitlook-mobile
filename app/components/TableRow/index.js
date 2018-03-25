import React from 'react';
import { View, Text } from 'react-native';

import Link from 'components/Link';
import styles from './styles';

const TableRow = (props) => {
  const {
    titleText, cols
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
          {titleText}
        </Text>
      </View>
      {
        props.cols.map((col) => (
          <View key={col.key} style={styles.col}>
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
        ))
      }
    </View>
  )
};

TableRow.defaultProps = {
  titleWidth: 80,
}

export default TableRow;
