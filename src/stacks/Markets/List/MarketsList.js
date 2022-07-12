import React, {useContext, useEffect} from 'react';
import {Divider, Layout, List} from '@ui-kitten/components';
import {MarketsContext} from '../../../context/markets';
import MarketsListItem from './components/MarketListItem';
import MarketsListHeader from './components/MarketListHeader';
import styles from './styles';

export default function MarketsList({navigation}) {
  const {items, fetch} = useContext(MarketsContext);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const onDetailsPress = () => {
    navigation && navigation.navigate('MarketsDetails');
  };

  return (
    <Layout style={styles.list}>
      <Layout level="3">
        <MarketsListHeader />
      </Layout>
      <List
        ItemSeparatorComponent={Divider}
        renderItem={MarketsListItem}
        data={items}
      />
    </Layout>
  );
}
