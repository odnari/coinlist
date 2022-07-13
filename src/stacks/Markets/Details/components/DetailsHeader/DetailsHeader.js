import React from 'react';
import styles from './styles';
import {Avatar, Layout} from '@ui-kitten/components';

export default function DetailsHeader({image}) {
  return (
    <React.Fragment>
      <Layout level="2">
        <Avatar style={styles.logo} source={{uri: image}} />
      </Layout>
    </React.Fragment>
  );
}
