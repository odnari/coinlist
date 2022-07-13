import React, {useCallback, useContext, useEffect} from 'react';
import {Divider, Layout, List} from '@ui-kitten/components';
import {MarketsContext} from '../../../context/markets';
import {SettingsContext} from '../../../context/settings';
import {loadingStates} from '../../../constants';
import MarketsListItem from './components/MarketListItem';
import MarketsListHeader from './components/MarketListHeader';
import styles from './styles';

export default function MarketsList({navigation}) {
  const {items, fetch, status} = useContext(MarketsContext);
  const {currency} = useContext(SettingsContext);

  const onPress = useCallback(
    item =>
      navigation.navigate('MarketsDetails', {
        id: item.id,
        name: item.name,
      }),
    [navigation],
  );

  const loadMarkets = useCallback(
    () => fetch({vs_currency: currency}),
    [fetch, currency],
  );

  useEffect(() => {
    loadMarkets();
  }, [loadMarkets]);

  return (
    <Layout style={styles.list}>
      <List
        refreshing={status === loadingStates.LOADING}
        onRefresh={loadMarkets}
        ItemSeparatorComponent={Divider}
        renderItem={props => <MarketsListItem onPress={onPress} {...props} />}
        data={items}
        ListHeaderComponent={MarketsListHeader}
      />
    </Layout>
  );
}
