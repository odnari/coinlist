import React from 'react';
import styles from './styles';
import {Divider, Layout, Text} from '@ui-kitten/components';

export default function DetailsRow({label, value}) {
  return (
    <React.Fragment>
      <Layout level="1" style={styles.container}>
        <Text appearance="hint" category="s1">
          {label}
        </Text>
        <Text category="s1">{value}</Text>
      </Layout>
      <Divider />
    </React.Fragment>
  );
}
