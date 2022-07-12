import React, {useContext, useEffect} from 'react';
import {Divider, Layout, List} from '@ui-kitten/components';
import {MarketsContext} from '../../../context/markets';
import MarketsListItem from './components/MarketListItem';
import MarketsListHeader from './components/MarketListHeader';
import styles from './styles';

export default function MarketsList() {
  const {items, fetch} = useContext(MarketsContext);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Layout style={styles.list}>
      <List
        ItemSeparatorComponent={Divider}
        renderItem={props => <MarketsListItem {...props} />}
        data={items}
        ListHeaderComponent={MarketsListHeader}
      />
    </Layout>
  );
}
