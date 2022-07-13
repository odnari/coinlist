import React from 'react';
import {Avatar, Layout} from '@ui-kitten/components';
import styles from './styles';

export default function DetailsHeader({image}) {
  return (
    <React.Fragment>
      <Layout level="2">
        <Avatar style={styles.logo} source={{uri: image}} />
      </Layout>
    </React.Fragment>
  );
}
